import React, { createContext, ReactNode } from 'react';
import { Collection } from '@flatsense/client-api';
import useCollectionsQuery from '../hooks/queries/useCollectionsQuery';

export const CollectionsContext = createContext<Collection[]>([]);

interface CollectionsProviderProps {
  children: ReactNode;
}

export function CollectionsProvider({ children }: CollectionsProviderProps) {
  const { data } = useCollectionsQuery();

  console.log(data);

  if (!data) return <></>;
  return <CollectionsContext.Provider value={data}>{children}</CollectionsContext.Provider>;
}
