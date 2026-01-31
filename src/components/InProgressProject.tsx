import { useTranslation } from "react-i18next";

export const InProgressProject = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Header */}
      <div className="flex flex-col gap-6 px-16 lg:px-80 pb-20 w-full max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-6">
          <h3 className="font-medium text-5xl lg:text-6xl">{t("wip.title")}</h3>
          <p className="text-gray-500">{t("wip.subtitle")}</p>
        </div>
      </div>
      {/* Card */}
      <div className="px-6 lg:px-50 pb-20">
        <div className="border border-neutral-400 rounded-3xl px-10 py-20 flex flex-col items-center gap-8 ">
          {/* Icon (Coding / WIP) */}
          <div className="p-4 bg-gray-100 rounded-full">
            <svg
              className="w-12 h-12 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
          </div>
          {/* Information */}
          <div className="flex flex-col gap-5 place-content-center">
            <h3 className="text-3xl lg:text-4xl">{t("wip.card.title")}</h3>
            <p className="text-gray-500 text-lg">{t("wip.card.text")}</p>
          </div>
        </div>
      </div>
    </>
  );
};
