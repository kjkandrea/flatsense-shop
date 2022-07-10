import React from 'react';
import { CollectionProvider } from '@flatsense/client-toolkit';
import { useParams } from 'react-router-dom';
import CollectionView from '../components/collection/CollectionView';

export default function Collection() {
  const { id } = useParams();

  return (
    <CollectionProvider collectionNo={id}>
      <CollectionView />
    </CollectionProvider>
  );
}
