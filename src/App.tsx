import { Route, Routes } from "react-router-dom";
import { BVName } from "./components/Name";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { useTranslation } from "react-i18next";
import { routeMap } from "./i18n/routes";

export default function App() {
  return (
    <div className="flex w-full items-center justify-center bg-white">
      <div className="fixed top-8 left-5 lg:top-10 lg:left-10 mix-blend-difference z-50">
        <BVName className="h-10 text-3xl" />
      </div>

      <Navigation />

      <div className="pt-40">
        <AppRoutes />
      </div>
    </div>
  );
}

function AppRoutes() {
  const { i18n } = useTranslation();
  const lang = i18n.language as "cs" | "en";

  return (
    <Routes>
      <Route path={routeMap.home[lang]} element={<Home />} />
      <Route path={routeMap.contact[lang]} element={<Contact />} />
    </Routes>
  );
}
