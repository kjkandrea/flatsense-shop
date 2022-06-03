export * from './components/Counter';
import Client from '@flatsense/client-api';

export const client = Client.buildClient({
  storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38',
  domain: 'graphql.myshopify.com',
});
