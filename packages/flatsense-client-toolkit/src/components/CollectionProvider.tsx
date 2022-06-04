import React, { createContext, useEffect, ReactNode } from 'react';
import { useClient } from '../foundation/useClient';

export const CollectionContext = createContext<null>(null!);

interface CollectionProviderProps {
  children: ReactNode;
}

export function CollectionProvider({ children }: CollectionProviderProps) {
  const client = useClient();

  const fetch = () => client.collection.fetchAll();

  useEffect(() => {
    fetch().then(console.log);
  }, []);

  return <CollectionContext.Provider value={null}>{children}</CollectionContext.Provider>;
}
