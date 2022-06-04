import React, { createContext, ReactNode } from 'react';
import { CollectionWithProducts } from '@flatsense/client-api';
import useCollectionQuery from '../hooks/queries/useCollectionQuery';

export const CollectionContext = createContext<CollectionWithProducts>(null!);

interface CollectionProviderProps {
  collectionNo: number;
  children: ReactNode;
}

export function CollectionProvider({ collectionNo, children }: CollectionProviderProps) {
  const { data } = useCollectionQuery(collectionNo);

  if (!data) return <></>;
  return <CollectionContext.Provider value={data}>{children}</CollectionContext.Provider>;
}
