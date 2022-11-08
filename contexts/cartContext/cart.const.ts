import { CartContextInterface } from './cart.types';

export const INITIAL_CART_CONTEXT: CartContextInterface = {
  cart: null as unknown as CartContextInterface['cart'],
  setCart: null as unknown as CartContextInterface['setCart'],
  cartTotalPrice: null as unknown as CartContextInterface['cartTotalPrice'],
  cartTotalItems: null as unknown as CartContextInterface['cartTotalItems'],
  addToCart: null as unknown as CartContextInterface['addToCart'],
  removeFromCart: null as unknown as CartContextInterface['removeFromCart'],
  removeItemsFromCart:
    null as unknown as CartContextInterface['removeItemsFromCart'],
  removeAllFromCart:
    null as unknown as CartContextInterface['removeAllFromCart'],
};
