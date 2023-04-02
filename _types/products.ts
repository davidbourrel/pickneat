export interface Product {
  product_id: string;
  name: string;
  description: string;
  price: number;
  in_stock: boolean;
  new_release: boolean;
  image: string;
  allergens?: string | null;
  category: string;
  amount?: number;
}

export interface ProductIdProps {
  ssrProduct: Product;
}

export enum FoodCategoryEnum {
  Burger = 'BURGER',
  Side = 'SIDE',
  Drink = 'DRINK',
  Dessert = 'DESSERT',
  Salad = 'SALAD',
}
