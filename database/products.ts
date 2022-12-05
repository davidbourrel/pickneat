import burgers from './burgers.json';
import sides from './sides.json';
import drinks from './drinks.json';
import desserts from './desserts.json';
import salads from './salads.json';
import { Product } from '_types/products';

export const products = [
  ...burgers,
  ...sides,
  ...drinks,
  ...desserts,
  ...salads,
] as Product[];

export const getProducts = () => products;
export const getProduct = (id: string) =>
  products.find((p) => p.product_id === id) as Product;
