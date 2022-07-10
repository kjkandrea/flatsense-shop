import { useContext } from 'react';
import { CollectionsContext } from '../components/CollectionsProvider';

export function useCollections() {
  return useContext(CollectionsContext);
}
