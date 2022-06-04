import React, { createContext, useState, useEffect, ReactPortal } from 'react';
import { useClient } from '../foundation/useClient';
import Client from '@flatsense/client-api';

export const ProductContext = createContext<Client.Product>(null!);

interface ProductProviderProps extends ReactPortal {
  productNo: number;
}

export function ProductProvider({ productNo, children }: ProductProviderProps) {
  const client = useClient();

  const [product, setProduct] = useState<Client.Product>(null!);
  const fetch = () => client.product.fetch(`gid://shopify/Product/${productNo}`);

  useEffect(() => {
    fetch().then((product) => setProduct(product));
  }, []);

  if (!product) return <>{children}</>;

  return <ProductContext.Provider value={product}>{children}</ProductContext.Provider>;
}
