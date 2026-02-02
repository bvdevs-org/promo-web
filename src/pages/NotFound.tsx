import { useTranslation } from "react-i18next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import MagnifyingGlass from "@assets/magnifying-glass.svg";
import { SEO } from "../components/SEO";

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO routeKey="notFound" noIndex={true} />

      <Header title="404" subtitle={t("404.subtitle")}></Header>

      <Card
        icon={
          <img
            src={MagnifyingGlass}
            alt={"MagnifyingGlass"}
            className="w-12 h-12"
          />
        }
        title={t("404.card.title")}
        text={t("404.card.text")}
      />

      <Footer />
    </>
  );
};
