import { PropsWithChildren, useEffect, useReducer } from 'react';
import { PICKNEAT_LS_CART } from '_constants/localStorage';
import { Product } from '_types/products';
import { cartReducer } from './cartReducer';
import {
  CartContextValue,
  CartDispatchContextValue,
  CartStateEnum,
} from './types';
import { CartContext, CartDispatchContext } from './contexts';

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, dispatch] = useReducer(cartReducer, [] as Product[]);

  /***************
   * Get cart from the local storage on load
   /**************/
  useEffect(() => {
    const cartInLocalStorage = JSON.parse(
      localStorage.getItem(PICKNEAT_LS_CART) as string
    ) as Product[];

    if (cartInLocalStorage?.length > 0) {
      dispatch({
        type: CartStateEnum.Initialize,
        newCart: cartInLocalStorage,
      });
    }
  }, []);

  /***************
   * Set cart to the local storage
   /**************/
  useEffect(() => {
    localStorage.setItem(PICKNEAT_LS_CART, JSON.stringify(cart));
  }, [cart]);

  /*****************
   * CONTEXT VALUES
   *****************/
  const contextValue: CartContextValue = { cart };
  const dispatchContextValue: CartDispatchContextValue = {
    dispatch,
  };

  return (
    <CartContext.Provider value={contextValue}>
      <CartDispatchContext.Provider value={dispatchContextValue}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};
