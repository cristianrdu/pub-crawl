import { createTRPCRouter } from "./trpc";
import { postRouter } from "./router/post";
import { authRouter } from "./router/auth";
import { locationRouter } from "./router/location";
import { routeRouter } from "./router/route";

export const appRouter = createTRPCRouter({
  post: postRouter,
  location: locationRouter,
  route: routeRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
