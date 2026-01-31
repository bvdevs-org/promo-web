import { routeMap, type Language } from "../i18n/routes";
import { BasicButton } from "./buttons/BasicButton";
import { BlackButton } from "./buttons/BlackButton";
import { useTranslation } from "react-i18next";

interface NavigationItemsProps {
  onItemClick?: () => void;
}

export const NavigationItems = ({ onItemClick }: NavigationItemsProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Language;

  const isMobile = Boolean(onItemClick);

  return (
    <>
      {/* Home Link */}
      <BasicButton
        text={t("nav.home")}
        to={routeMap.home[lang]}
        onClick={onItemClick}
      ></BasicButton>
      {/* Contact Button */}
      {!isMobile && (
        <BlackButton
          text={t("nav.contact")}
          to={routeMap.contact[lang]}
          onClick={onItemClick}
        />
      )}
      {/* Private Gym */}
      <BasicButton
        text={t("nav.project1")}
        to={routeMap.project1[lang]}
        onClick={onItemClick}
      ></BasicButton>
    </>
  );
};
