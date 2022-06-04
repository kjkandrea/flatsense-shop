import React from 'react';
import { ProductProvider } from '@flatsense/client-toolkit';
import { ProductDetail } from '../components/product/ProductDetail';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { id } = useParams();

  return (
    <ProductProvider productNo={Number(id)}>
      <ProductDetail />
    </ProductProvider>
  );
}
