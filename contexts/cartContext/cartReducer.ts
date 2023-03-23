import { Product } from '_types/products';
import { CartAction, CartStateEnum } from './types';

export const cartReducer = (cart: Product[], action: CartAction): Product[] => {
  const { type, product_id, product, newCart } = action;

  switch (type) {
    case CartStateEnum.Initialize: {
      return newCart && newCart.length > 0 ? newCart : ([] as Product[]);
    }
    case CartStateEnum.Add: {
      if (!product) throw new Error(`Unknown product ${product}`);

      const indexOfClickedItem = cart.findIndex(
        (item) => item.product_id === product.product_id
      );

      const itemAlreadyExists = indexOfClickedItem !== -1;
      if (itemAlreadyExists) {
        // Just add +1
        return cart.map((item) =>
          item.product_id === product.product_id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      // First time so add item in cart

      return [...cart, { ...product, amount: 1 }];
    }
    case CartStateEnum.DeleteItem: {
      return cart.reduce((total, item) => {
        if (item.product_id === product_id) {
          if (item.amount === 1) return total;
          return [...total, { ...item, amount: item.amount - 1 }];
        } else {
          return [...total, item];
        }
      }, [] as Product[]);
    }
    case CartStateEnum.DeleteItems: {
      const indexOfItemToRemove = cart.findIndex(
        (cartItem) => cartItem.product_id === product_id
      );

      if (indexOfItemToRemove === -1) {
        return cart;
      }

      return cart.filter((cart) => cart.product_id !== product_id);
    }
    default: {
      throw Error('Unknown action: ' + type);
    }
  }
};
