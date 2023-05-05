import { Dispatch, SetStateAction } from 'react';
import { Maybe } from '_types/app';
import { ClassNameProps } from '_types/components';
import { FoodCategoryEnum, Product } from '_types/products';

export interface CategoryProps {
  id: string;
  products: Maybe<Product[]>;
  title: string;
  category: FoodCategoryEnum;
  setIntersectionObserverEntries: Dispatch<
    SetStateAction<IntersectionObserverEntry[]>
  >;
}

export interface MenuCategoriesProps extends ClassNameProps {
  ssrProducts: Product[];
  setIntersectionObserverEntries: Dispatch<
    SetStateAction<IntersectionObserverEntry[]>
  >;
}
