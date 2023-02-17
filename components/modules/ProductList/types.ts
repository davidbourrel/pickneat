import { Maybe } from '_types/app';
import { Product, FoodCategoryEnum } from '_types/products';

export interface ProductListProps {
  products: Maybe<Product[]>;
  category: FoodCategoryEnum;
}
