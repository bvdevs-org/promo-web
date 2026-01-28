import { routeMap } from "../i18n/routes";
import { BasicButton } from "./buttons/BasicButton";
import { BlackButton } from "./buttons/BlackButton";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "cs" | "en";

  return (
    <nav className="fixed top-10 left-[50%] translate-x-[-50%] flex gap-4 items-center rounded-full bg-gray-100 px-5 py-2">
      {/* Home Link */}
      <BasicButton text={t("nav.home")} to={routeMap.home[lang]}></BasicButton>
      {/* Contact Button */}
      <BlackButton
        text={t("nav.contact")}
        to={routeMap.contact[lang]}
      ></BlackButton>
    </nav>
  );
};
