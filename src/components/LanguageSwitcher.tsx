import { useTranslation } from "react-i18next";
import { routeMap, type RouteKey, type Language } from "../i18n/routes";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleSwitch = (targetLang: Language): void => {
    const { hostname, pathname, search, protocol, port } = window.location;
    const currentLang = i18n.language as Language;

    const routeKey = (Object.keys(routeMap) as RouteKey[]).find(
      (key) => routeMap[key][currentLang] === pathname,
    );

    const targetSlug = routeKey ? routeMap[routeKey][targetLang] : pathname;

    const isLocal = hostname.includes("local.");
    const domain =
      targetLang === "cs"
        ? isLocal
          ? "local.bvdevs.cz"
          : "bvdevs.cz"
        : isLocal
          ? "local.bvdevs.com"
          : "bvdevs.com";

    const targetPort = port ? `:${port}` : "";

    window.location.assign(
      `${protocol}//${domain}${targetPort}${targetSlug}${search}`,
    );
  };

  const currentLang = i18n.language as Language;

  return (
    <div className="flex items-center bg-white rounded-full p-1 ml-4">
      {(["cs", "en"] as Language[]).map((lang) => {
        const isActive = currentLang === lang;
        return (
          <button
            key={lang}
            onClick={() => handleSwitch(lang)}
            disabled={isActive}
            className={`
              px-5 py-1.5 rounded-full text-xs font-bold uppercase
              ${isActive ? "bg-black text-white" : "text-black cursor-pointer"}
            `}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
};
