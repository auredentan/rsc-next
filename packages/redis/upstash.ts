import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

import { RateLimiter } from "./types";

export const createUpstashRateLimiter = () => {
  const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "10 s"),
    analytics: true,
    /**
     * Optional prefix for the keys used in redis. This is useful if you want to share a redis
     * instance with other applications and want to avoid key collisions. The default prefix is
     * "@upstash/ratelimit"
     */
    prefix: "@upstash/ratelimit",
  });
  return ratelimit as RateLimiter;
};
