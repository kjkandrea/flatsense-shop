import Client from 'shopify-buy';

export default Client;

export type Config = Client.Config;
// TODO. Client 에 타입정의 안되있음. 망함
export interface CollectionWithProducts {
  title: string;
  description: string;
  products: Product[];
}
export type Product = Client.Product;
