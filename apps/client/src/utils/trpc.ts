import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '../../../server/src/trpc/trpc.router';
import { getEnv } from '../config';

export const trpc = createTRPCProxyClient<AppRouter>({
	links: [
		httpBatchLink({
			url: `${getEnv().NEXT_PUBLIC_API_URL}/trpc`,
		}),
	],
});
