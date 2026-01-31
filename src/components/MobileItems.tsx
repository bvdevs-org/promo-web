import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { ContactButton } from "./buttons/ContactButton";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routeMap, type Language } from "../i18n/routes";

export const MobileItems = ({ isDark = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const { i18n } = useTranslation();
  const lang = i18n.language as Language;

  const contactPath = routeMap.contact[lang];
  const isOnContactPage = location.pathname === contactPath;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className="flex items-center gap-0.5">
      {/* Only render if NOT on contact page */}
      {!isOnContactPage && (
        <ContactButton isDark={isDark} onClick={closeMenu} />
      )}
      <BurgerMenu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        isDark={isDark}
      />
    </section>
  );
};
