export interface Products {
  product_id: string;
  name: string;
  description: string;
  price: number;
  in_stock: boolean;
  new_release: boolean;
  image: string;
  allergens?: string | null;
  category: string;
}

export enum Category {
  Burger = 'BURGER',
  Side = 'SIDE',
  Drink = 'DRINK',
  Dessert = 'DESSERT',
  Salad = 'SALAD',
}
