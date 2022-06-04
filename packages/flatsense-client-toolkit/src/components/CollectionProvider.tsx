import React, { createContext, useEffect, ReactNode } from 'react';
import { useClient } from '../foundation/useClient';

export const CollectionContext = createContext<null>(null!);

interface CollectionProviderProps {
  children: ReactNode;
}

export function CollectionProvider({ children }: CollectionProviderProps) {
  const client = useClient();

  const fetch = () => client.collection.fetchWithProducts('gid://shopify/Collection/389242499');

  useEffect(() => {
    fetch().then((data) => {
      console.log(data);
      console.log(data.map(({ title }) => title));
    });
  }, []);

  return <CollectionContext.Provider value={null}>{children}</CollectionContext.Provider>;
}
