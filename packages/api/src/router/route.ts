import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const routeRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.route.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.route.findFirst({ where: { id: input } });
  }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        category: z.string(),
        image: z.optional(z.string()),
        postId: z.optional(z.string()),
        userId: z.optional(z.string()),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.route.create({ data: input });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.route.delete({ where: { id: input } });
  }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.optional(z.string()),
        content: z.optional(z.string()),
        category: z.optional(z.string()),
        image: z.optional(z.string().nullable()),
        postId: z.optional(z.string().nullable()),
        userId: z.optional(z.string().nullable()),
      }),
    )
    .mutation(({ ctx, input }) => {
      const {id, ...rest } = input;

      return ctx.prisma.route.update({
        where: { id },
        data: { ...rest },
      });
    }),
});
