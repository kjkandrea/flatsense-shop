import { useClient } from '../../foundation/useClient';
import { useQuery } from 'react-query';

export default function useProductQuery(productNo: number) {
  const client = useClient();

  return useQuery(['product', productNo], () => client.product.fetch(`gid://shopify/Product/${productNo}`));
}
