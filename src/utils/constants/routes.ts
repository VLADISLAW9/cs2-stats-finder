export const ROUTES = {
  HOME: '/',
  STATS: (id: string) => `/stats/${id}`
} as const;
