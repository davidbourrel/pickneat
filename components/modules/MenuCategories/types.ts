import { Maybe } from '_types/app';
import { ClassNameProps } from '_types/components';
import { CategoryEnum, Product } from '_types/products';

export interface CategoryProps {
  id: string;
  products: Maybe<Product[]>;
  title: string;
  category: CategoryEnum;
}

export interface MenuCategoriesProps extends ClassNameProps {
  ssrProducts: Product[];
}
