import {createRateLimiter} from '@rsc/redis';

export const rateLimiter = createRateLimiter()
