import React, { createContext, ReactPortal } from 'react';
import Client from '@flatsense/client-api';

interface ClientProviderProps extends ReactPortal {
  config: Client.Config;
}

export const ClientContext = createContext<Client.Client>(null!);

export function ClientProvider({ config, children }: ClientProviderProps) {
  const api = Client.buildClient(config);

  return <ClientContext.Provider value={api}>{children}</ClientContext.Provider>;
}
