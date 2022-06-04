import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useClient } from '../foundation/useClient';
import { Product } from '@flatsense/client-api';

export const ProductContext = createContext<Product>(null!);

interface ProductProviderProps {
  productNo: number;
  children: ReactNode;
}

export function ProductProvider({ productNo, children }: ProductProviderProps) {
  const client = useClient();

  const [product, setProduct] = useState<Product>(null!);
  const fetch = () => client.product.fetch(`gid://shopify/Product/${productNo}`);

  useEffect(() => {
    fetch().then((product) => setProduct(product));
  }, []);

  if (!product) return <>{children}</>;

  return <ProductContext.Provider value={product}>{children}</ProductContext.Provider>;
}
