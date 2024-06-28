/**
 * This is the client-side code that uses the inferred types from the slickci-runner
 */
import { createTRPCClient, httpBatchLink } from '@trpc/client';
/**
 * We only import the `AppRouter` type from the slickci-runner - this is not available at runtime
 */
import type { AppRouter } from 'src/slickci-runner';

// Initialize the tRPC client
const trpc = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000',
        }),
    ],
});

// Call procedure functions

// 💡 Tip, try to:
// - hover any types below to see the inferred types
// - Cmd/Ctrl+click on any function to jump to the definition
// - Rename any variable and see it reflected across both frontend and backend

const result = await trpc.scheduler.createWorkflow.mutate({
    commands: ["echo hello", "node --version"],
    cpu: "0.5",
    memory: "512Mi"
});

console.log('Workflow Result:', result);
