import { useContext } from 'react';
import { ClientContext } from '../CreateClientContext';

export function useClient() {
  return useContext(ClientContext);
}
