import { Maybe } from '_types/maybe';
import { Product, CategoryEnum } from '_types/products';

export interface ProductListProps {
  products: Maybe<Product[]>;
  category: CategoryEnum;
}
