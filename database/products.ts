import burgers from './burgers.json';
import sides from './sides.json';
import drinks from './drinks.json';
import desserts from './desserts.json';
import salads from './salads.json';
import { Products } from '_types/products';

export const products = [
  ...burgers,
  ...sides,
  ...drinks,
  ...desserts,
  ...salads,
] as Products[];
