import { useTranslation } from "react-i18next";
import { TechGrid } from "../components/grid/TechGrid";
import { SEO } from "../components/SEO";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO routeKey="home" />
      <div className="flex flex-col gap-6 px-6 lg:px-80 pb-20 w-full max-w-screen-2xl mx-auto">
        <div>
          <h1 className="font-medium text-5xl lg:text-6xl">
            {t("home.title1")}
          </h1>
          <h1 className="font-medium text-5xl lg:text-6xl">
            {t("home.title2")}
          </h1>
        </div>
        <p className="text-gray-500">{t("home.description1")}</p>
        <p className="text-gray-500">{t("home.description2")}</p>
      </div>
      <TechGrid />
    </>
  );
};
