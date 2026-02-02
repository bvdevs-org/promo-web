import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import express from "express";
import { fileURLToPath } from "url";
import { routeMap } from "../src/i18n/routes";

const BUILD_DIR = "dist";
const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const DIST_PATH = path.join(ROOT_DIR, BUILD_DIR);

async function prerender() {
  console.log("🚀 Starting Smart Prerender...");

  const template = fs.readFileSync(path.join(DIST_PATH, "index.html"), "utf-8");

  const routesToPrerender = new Set<string>();
  Object.values(routeMap).forEach((paths) => {
    routesToPrerender.add(paths.cs);
    routesToPrerender.add(paths.en);
  });
  const routes = Array.from(routesToPrerender);

  const app = express();

  app.use(express.static(DIST_PATH, { index: false }));

  app.use((_, res) => {
    res.send(template);
  });

  const server = app.listen(PORT);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  for (const route of routes) {
    try {
      console.log(`📸 Processing: ${route}`);
      await page.goto(`${BASE_URL}${route}`, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });
      const content = await page.content();

      const isRoot = route === "/";
      const filePath = isRoot
        ? path.join(DIST_PATH, "index.html")
        : path.join(DIST_PATH, route, "index.html");

      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

      fs.writeFileSync(filePath, content);
    } catch (error) {
      console.error(`❌ Failed to render ${route}:`, error);
    }
  }

  await browser.close();
  server.close();
  console.log("✅ Prerendering complete!");
  process.exit(0);
}

prerender();
