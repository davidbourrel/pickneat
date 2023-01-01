import { Product } from '_types/products';

export interface CartContextInterface {
  cart: Product[];
  cartTotalPrice: number;
  cartTotalItems: number;
  addToCart: (product: Product) => void;
  removeFromCart: (product_id: string) => void;
  removeItemsFromCart: (product_id: string) => void;
  removeAllFromCart: () => void;
}
