import { useContext } from 'react';
import { ProductContext } from '../components/ProductProvider';

export function useProduct() {
  return useContext(ProductContext);
}
