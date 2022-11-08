import { useContext, useMemo } from 'react';
import cartContext from '.';
import { CartContextInterface } from './cart.types';

type UseTotalCartResult = Pick<
  CartContextInterface,
  'cartTotalPrice' | 'cartTotalItems'
>;

const useTotalCart = (): UseTotalCartResult => {
  const { cartTotalPrice, cartTotalItems } = useContext(cartContext);
  return useMemo(
    () => ({ cartTotalPrice, cartTotalItems }),
    [cartTotalPrice, cartTotalItems]
  );
};

export default useTotalCart;
