import React from 'react';
import { ProductProvider } from '@flatsense/client-toolkit';
import { ProductView } from '../components/product/ProductView';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { id } = useParams();

  return (
    <ProductProvider productNo={Number(id)}>
      <ProductView />
    </ProductProvider>
  );
}
