import { router } from '../trpc';
import { showsRouter } from './shows';

export const appRouter = router({
  shows: showsRouter,
  // future: music, media, merch...
});

export type AppRouter = typeof appRouter;
