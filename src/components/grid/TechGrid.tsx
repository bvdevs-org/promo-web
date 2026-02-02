import { useTranslation } from "react-i18next";

// Icons
import lightning from "@assets/lightning.svg";
import shield from "@assets/shield.svg";
import cloud from "@assets/cloud.svg";
import phone from "@assets/phone.svg";
import message from "@assets/message.svg";
import users from "@assets/users.svg";
import progress from "@assets/progress.svg";
import infinity from "@assets/infinity.svg";

import { GridCell } from "./GridCell";

const iconMap: Record<string, string> = {
  lightning: lightning,
  performance: shield,
  infrastructure: cloud,
  mobile: phone,
  availability: message,
  checkins: users,
  transparency: progress,
  partnership: infinity,
};

export const TechGrid = () => {
  const { t } = useTranslation();

  const cells = t("grid.cells", { returnObjects: true });

  return (
    <div
      data-header="dark"
      className="flex flex-col gap-24 items-center place-content-center bg-black text-white lg:px-40 px-6 py-20"
    >
      <h2 className="font-medium text-2xl">{t("grid.header")}</h2>

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-12">
        {Object.entries(cells).map(([key, value]) => (
          <GridCell
            key={key}
            icon={<img src={iconMap[key]} alt={key} />}
            name={value.name}
            text={value.text}
          />
        ))}
      </div>
    </div>
  );
};
