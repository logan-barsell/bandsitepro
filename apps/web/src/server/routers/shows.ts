import { router, protectedProcedure } from '../trpc';
export const showsRouter = router({
  list: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.show.findMany({
      where: { bandId: ctx.session!.user.bandId },
      orderBy: { date: 'asc' },
    });
  }),
});
