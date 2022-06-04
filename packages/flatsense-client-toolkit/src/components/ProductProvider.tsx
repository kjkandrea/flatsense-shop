import React, { createContext } from 'react';
import { useClient } from '../foundation/useClient';

export const ProductContext = createContext<any | null>(null);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const client = useClient();

  client.product.fetchAll().then(console.log);

  return <ProductContext.Provider value={null}>{children}</ProductContext.Provider>;
}
