import { Dispatch, SetStateAction } from 'react';
import { Product } from '_types/products';

export interface CartContextInterface {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
  cartTotalPrice: number;
  cartTotalItems: number;
  addToCart: (product: Product) => void;
  removeFromCart: (product_id: string) => void;
  removeItemsFromCart: (product_id: string) => void;
  removeAllFromCart: () => void;
}
