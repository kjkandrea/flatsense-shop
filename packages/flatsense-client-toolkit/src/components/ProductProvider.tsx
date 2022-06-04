import React, { createContext, ReactNode } from 'react';
import { Product } from '@flatsense/client-api';
import useProductQuery from '../hooks/queries/useProductQuery';

export const ProductContext = createContext<Product>(null!);

interface ProductProviderProps {
  productNo: number;
  children: ReactNode;
}

export function ProductProvider({ productNo, children }: ProductProviderProps) {
  const { data } = useProductQuery(productNo);

  if (!data) return <>{children}</>;

  return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>;
}
