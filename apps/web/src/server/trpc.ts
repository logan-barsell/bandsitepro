import { initTRPC, TRPCError } from '@trpc/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import { prisma } from '@bandsitepro/prisma';
import type { Session } from 'next-auth';

interface Context {
  session: Session | null;
  prisma: typeof prisma;
}

export const createContext = async (): Promise<Context> => {
  const session = await getServerSession(authOptions);
  return { session, prisma };
};

const t = initTRPC.context<Context>().create();

const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({ ctx });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed);

export const appRouter = router({
  hello: publicProcedure.query(() => 'Hello from tRPC!'),
});

export type AppRouter = typeof appRouter;
