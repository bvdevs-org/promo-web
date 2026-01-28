import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import cs from "./locales/cs.json";
import en from "./locales/en.json";

export const resources = {
  cs: { translation: cs },
  en: { translation: en },
} as const;

const getLanguageByDomain = () => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (hostname.endsWith(".cz")) return "cs";
    if (hostname.endsWith(".com")) return "en";
  }
  return "cs";
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguageByDomain(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
