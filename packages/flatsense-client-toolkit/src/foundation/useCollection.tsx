import { useContext } from 'react';
import { CollectionContext } from '../components/CollectionProvider';

export function useCollection() {
  return useContext(CollectionContext);
}
