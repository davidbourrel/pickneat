import { Dispatch, SetStateAction } from 'react';
import { Products } from '_types/products';

export interface CartContextInterface {
  cart: Products[];
  setCart: Dispatch<SetStateAction<Products[]>>;
  cartTotalPrice: number;
  cartTotalItems: number;
  addToCart: (product: Products) => void;
  removeFromCart: (product_id: string) => void;
  removeItemsFromCart: (product_id: string) => void;
  removeAllFromCart: () => void;
}
