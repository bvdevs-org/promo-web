import { useTranslation } from "react-i18next";
import { Header } from "./Header";
import { Card } from "./Card";
import Cube from "@assets/cube-transparent.svg";

export const InProgressProject = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Header */}
      <Header title={t("wip.title")} subtitle={t("wip.subtitle")}></Header>

      <Card
        icon={<img src={Cube} alt={"Cube"} className="w-12 h-12" />}
        title={t("wip.card.title")}
        text={t("wip.card.text")}
      />
    </>
  );
};
