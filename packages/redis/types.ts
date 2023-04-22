export type RateLimiter = {
  limit: (identifier: string) => Promise<{ success: boolean }>;
};
