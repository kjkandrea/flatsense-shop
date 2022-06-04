import React, { createContext, useEffect, ReactNode } from 'react';
import { useClient } from '../foundation/useClient';
import { Collection } from '@flatsense/client-api';

export const CollectionContext = createContext<Collection>(null!);

interface CollectionProviderProps {
  collectionNo: number;
  children: ReactNode;
}

export function CollectionProvider({ collectionNo, children }: CollectionProviderProps) {
  const client = useClient();

  const fetch = () => client.collection.fetchWithProducts(`gid://shopify/Collection/${collectionNo}`);

  useEffect(() => {
    fetch().then(console.log);
  }, []);

  return <CollectionContext.Provider value={null as any}>{children}</CollectionContext.Provider>;
}
