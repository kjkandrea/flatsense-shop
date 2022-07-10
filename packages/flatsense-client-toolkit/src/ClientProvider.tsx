import React, { createContext, ReactNode } from 'react';
import Client, { Config } from '@flatsense/client-api';
import { QueryClient, QueryClientProvider } from 'react-query';

interface ClientProviderProps {
  config: Config;
  children: ReactNode;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const ClientContext = createContext<Client.Client>(null!);

export function ClientProvider({ config, children }: ClientProviderProps) {
  const api = Client.buildClient(config);

  return (
    <ClientContext.Provider value={api}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ClientContext.Provider>
  );
}
