export const routeMap = {
  home: { cs: "/", en: "/" },
  contact: { cs: "/kontakt", en: "/contact" },
} as const;

export type RouteKey = keyof typeof routeMap;
