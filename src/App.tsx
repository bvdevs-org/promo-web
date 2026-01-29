import { Route, Routes } from "react-router-dom";
import { LogoButton } from "./components/LogoButton";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { useTranslation } from "react-i18next";
import { routeMap, type Language } from "./i18n/routes";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useScrollColor } from "./hooks/useScrollCollor";
import { BurgerMenu } from "./components/BurgerMenu";

export default function App() {
  const isDark = useScrollColor();

  return (
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden">
      {/* Fixed Elements */}
      <div
        id="logo-trigger"
        className="fixed top-8 left-5 lg:top-10 lg:left-10 z-50"
      >
        <LogoButton isDark={isDark} />
      </div>

      {/* Navigation: Hidden on mobile, flex on medium screens+ */}
      <div className="hidden md:flex">
        <Navigation />
      </div>

      {/* Switcher: Hidden on mobile, block on medium screens+ */}
      <div className="hidden md:block fixed top-8 right-5 lg:top-10 lg:right-10 mix-blend-difference z-50">
        <LanguageSwitcher />
      </div>

      <div className="block md:hidden fixed top-9 right-5 lg:top-10 lg:right-10 z-50">
        <BurgerMenu isDark={isDark} />
      </div>

      <div className="pt-40 w-full">
        <AppRoutes />
      </div>
    </div>
  );
}

function AppRoutes() {
  const { i18n } = useTranslation();
  const lang = i18n.language as Language;

  return (
    <Routes>
      <Route path={routeMap.home[lang]} element={<Home />} />
      <Route path={routeMap.contact[lang]} element={<Contact />} />
    </Routes>
  );
}
