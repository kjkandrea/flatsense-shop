import { useContext } from 'react';
import { ClientContext } from '../ClientProvider';

export function useClient() {
  return useContext(ClientContext);
}
