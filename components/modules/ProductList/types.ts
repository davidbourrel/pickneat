import { Maybe } from '_types/app';
import { Product, CategoryEnum } from '_types/products';

export interface ProductListProps {
  products: Maybe<Product[]>;
  category: CategoryEnum;
}
