import { routeMap, type RouteKey } from "../i18n/routes";

export const SEO = ({ routeKey }: { routeKey: RouteKey }) => {
  const czUrl = `https://bvdevs.cz${routeMap[routeKey].cs}`;
  const enUrl = `https://bvdevs.com${routeMap[routeKey].en}`;

  return (
    <>
      <link rel="alternate" hrefLang="cs" href={czUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
    </>
  );
};
