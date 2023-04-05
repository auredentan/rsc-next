import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

declare global {
    interface BigInt {
      toJSON(): string;
    }
  }
  
BigInt.prototype.toJSON = function (): string {
return this.toString();
};

export * from '@prisma/client'
