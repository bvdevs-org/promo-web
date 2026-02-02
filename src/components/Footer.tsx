import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer data-header="dark" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">
          {t("footer.cta")}
        </p>

        <a
          href="mailto:info@bvdevs.com"
          aria-label="Email info@bvdevs.com"
          className="text-4xl md:text-6xl font-bold text-zinc-300 hover:text-white transition-all duration-300 ease-in-out"
        >
          info@bvdevs.com
        </a>

        <div className="w-full h-px bg-zinc-900 my-12"></div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full text-[10px] text-zinc-400 gap-6 uppercase tracking-widest">
          <p>{t("footer.rights")}</p>

          <div className="flex flex-wrap justify-center gap-6">
            <span>{t("footer.legal.id")}</span>
            <a
              href="#"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              {t("footer.links.privacy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
