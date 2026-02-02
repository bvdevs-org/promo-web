import { useTranslation, Trans } from "react-i18next";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO routeKey="contact" />
      <div className="flex flex-col gap-6 px-16 lg:px-80 pb-20 w-full max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium text-5xl lg:text-6xl">
            {t("contact.hero.title")}
          </h2>
          <p className="text-gray-500">{t("contact.hero.description")}</p>
        </div>
      </div>
      <div className="px-6 lg:px-50 pb-20">
        <div className="border border-neutral-400 rounded-3xl grid grid-cols-1 py-20 lg:grid-cols-2 px-10 lg:py-5">
          <div className="flex flex-col gap-5 place-content-center">
            <h2 className="text-3xl lg:text-4xl">
              {t("contact.formSection.title")}
            </h2>
            <p className="text-gray-500">
              <Trans i18nKey="contact.formSection.description">
                Please fill out this form, and we will respond to you within one
                business day. Alternatively, you can drop us an
              </Trans>
              <a
                className="text-gray-700 hover:text-gray-900"
                href="mailto:info@bvdevs.com"
              >
                {t("contact.formSection.emailLink")}
              </a>
              .
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
};
