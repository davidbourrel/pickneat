import { CartContext } from './cart.types';

export const INITIAL_CART_CONTEXT: CartContext = {
  cart: null as unknown as CartContext['cart'],
  cartTotalPrice: null as unknown as CartContext['cartTotalPrice'],
  cartTotalItems: null as unknown as CartContext['cartTotalItems'],
  addToCart: null as unknown as CartContext['addToCart'],
  removeFromCart: null as unknown as CartContext['removeFromCart'],
  removeItemsFromCart: null as unknown as CartContext['removeItemsFromCart'],
  removeAllFromCart: null as unknown as CartContext['removeAllFromCart'],
};
