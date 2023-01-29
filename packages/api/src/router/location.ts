import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const locationRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.location.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.location.findFirst({ where: { id: input } });
  }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        image: z.string(),
        routeId: z.optional(z.string())
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.location.create({ data: input });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.location.delete({ where: { id: input } });
  }),
});
