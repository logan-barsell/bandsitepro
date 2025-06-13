import { SessionProvider } from 'next-auth/react';
import { trpc } from '@/utils/trpc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { ThemeProvider } from '@bandsitepro/ui';
import { useState } from 'react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps: { session, ...rest } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: '/api/trpc',
        }),
      ],
    })
  );

  return (
    <ThemeProvider>
      <trpc.Provider
        client={trpcClient}
        queryClient={queryClient}
      >
        <QueryClientProvider client={queryClient}>
          <SessionProvider session={session}>
            <Component {...rest} />
          </SessionProvider>
        </QueryClientProvider>
      </trpc.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
