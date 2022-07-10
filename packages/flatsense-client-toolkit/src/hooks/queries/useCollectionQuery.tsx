import { useClient } from '../../foundation/useClient';
import { useQuery } from 'react-query';

export default function useCollectionQuery(collectionNo: number) {
  const client = useClient();

  return useQuery(['collection', collectionNo], () =>
    client.collection.fetchWithProducts(`gid://shopify/Collection/${collectionNo}`),
  );
}
