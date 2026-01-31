import { useTranslation } from "react-i18next";
import { routeMap, type RouteKey, type Language } from "../i18n/routes";

type Props = {
  routeKey: RouteKey;
  ogImage?: string;
  noIndex?: boolean;
};

export const SEO = ({ routeKey, ogImage, noIndex = false }: Props) => {
  const { t, i18n } = useTranslation();

  const currentLang: Language = i18n.language.startsWith("cs") ? "cs" : "en";

  const domains = {
    cs: "https://bvdevs.cz",
    en: "https://bvdevs.com",
  };

  const czUrl = `${domains.cs}${routeMap[routeKey].cs}`;
  const enUrl = `${domains.en}${routeMap[routeKey].en}`;
  const canonicalUrl = currentLang === "cs" ? czUrl : enUrl;

  const title = t(`seo.${routeKey}.title`, "BV Devs");
  const description = t(`seo.${routeKey}.description`, "");
  const siteName = "BV Devs";

  const absoluteOgImage = ogImage ? `${domains[currentLang]}${ogImage}` : null;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Language versions */}
      <link rel="alternate" hrefLang="cs" href={czUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta
        property="og:locale"
        content={currentLang === "cs" ? "cs_CZ" : "en_US"}
      />
      <meta property="og:type" content="website" />
      {absoluteOgImage && (
        <meta property="og:image" content={absoluteOgImage} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {absoluteOgImage && (
        <meta name="twitter:image" content={absoluteOgImage} />
      )}
    </>
  );
};
