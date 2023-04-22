import type { RateLimiter } from "@rsc/redis/types";

import { createUpstashRateLimiter } from "@rsc/redis/upstash";

export const rateLimiter: RateLimiter = createUpstashRateLimiter();
