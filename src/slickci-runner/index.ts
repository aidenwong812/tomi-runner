/**
 * This a minimal tRPC slickci-runner
 */
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { z } from 'zod';
import { runner } from './workflow';
import type { Workflow } from './workflow'
import { publicProcedure, router } from './trpc.js';

const appRouter = router({
  scheduler: {
    createWorkflow: publicProcedure
      .input(z.object({
        commands: z.string().array(),
        cpu: z.string(),
        memory: z.string()
      }))
      .mutation(async (opts) => {
        const { input } = opts;
        //      ^?
        // Create a new user in the database
        const result = await runner.run(input as Workflow);
        //    ^?
        return result;
      }),
  }
});

// Export type router type signature, this is used by the client.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
