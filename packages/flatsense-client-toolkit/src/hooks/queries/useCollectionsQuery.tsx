import { useClient } from '../../foundation/useClient';
import { useQuery } from 'react-query';

export default function useCollectionsQuery() {
  const client = useClient();

  return useQuery(['collections'], () => client.collection.fetchAll());
}
