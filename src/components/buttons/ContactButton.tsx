import envelope from "@assets/envelope.svg";
import { NavLink } from "react-router-dom";
import { routeMap, type Language } from "../../i18n/routes";
import { useTranslation } from "react-i18next";

interface ContactButtonProps {
  isDark?: boolean;
  onClick?: () => void;
}

export const ContactButton = ({
  isDark = false,
  onClick,
}: ContactButtonProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as Language;

  return (
    <div className="w-8 h-8 cursor-pointer">
      <NavLink to={routeMap.contact[lang]} onClick={onClick}>
        <img
          src={envelope}
          alt="envelope"
          className={`${isDark ? "invert" : ""}`}
        />
      </NavLink>
    </div>
  );
};
