import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter, createContext } from '../../../server/trpc';

export default createNextApiHandler({
  router: appRouter,
  createContext,
});
