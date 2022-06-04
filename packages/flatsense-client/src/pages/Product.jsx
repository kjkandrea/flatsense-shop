import React from 'react';
import { ProductProvider } from '@flatsense/client-toolkit';
import { ProductDetail } from '../components/product/ProductDetail';

export default function Product() {
  return (
    <ProductProvider productNo={9895276099}>
      <ProductDetail />
    </ProductProvider>
  );
}
