import React from 'react';
import { Products } from '../components/product/Products';
import { CollectionProvider } from '@flatsense/client-toolkit';

export default function Curation() {
  return (
    <CollectionProvider>
      <div className="pt-1 pb-4">
        <h2 className="text-base font-medium text-gray-900">Shoes</h2>
        <p className="mt-1 text-sm text-gray-500">Awesome Shoes curation</p>
      </div>
      <Products />
    </CollectionProvider>
  );
}
