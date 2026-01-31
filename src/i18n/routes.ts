export const routeMap = {
  home: { cs: "/", en: "/" },
  contact: { cs: "/kontakt", en: "/contact" },
  project1: { cs: "/projekt1", en: "/project1" },
} as const;

export type RouteKey = keyof typeof routeMap;

export type Language = "cs" | "en";
