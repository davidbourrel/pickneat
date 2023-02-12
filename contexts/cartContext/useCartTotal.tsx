import { useContext, useMemo } from 'react';
import cartContext from '.';
import { CartContext } from './cart.types';

type UseCartTotalResult = Pick<
  CartContext,
  'cartTotalPrice' | 'cartTotalItems'
>;

const useCartTotal = (): UseCartTotalResult => {
  const { cartTotalPrice, cartTotalItems } = useContext(cartContext);
  return useMemo(
    () => ({ cartTotalPrice, cartTotalItems }),
    [cartTotalPrice, cartTotalItems]
  );
};

export default useCartTotal;
