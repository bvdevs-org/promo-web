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
    <div className="flex flex-col gap-24 items-center place-content-center bg-black text-white px-40 py-20">
      <h3 className="font-medium text-2xl">{t("grid.header")}</h3>

      <div className="grid grid-cols-4 gap-12">
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
