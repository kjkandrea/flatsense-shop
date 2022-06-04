import React, { createContext } from 'react';
import Client from '@flatsense/client-api';

interface ClientProviderProps {
  config: Client.Config;
  children: React.ReactNode;
}

export const ClientContext = createContext<any>(null);

export default function ClientProvider({ config, children }: ClientProviderProps) {
  const api = Client.buildClient(config);

  return <ClientContext.Provider value={api}>{children}</ClientContext.Provider>;
}
