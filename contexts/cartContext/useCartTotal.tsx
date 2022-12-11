import { useContext, useMemo } from 'react';
import cartContext from '.';
import { CartContextInterface } from './cart.types';

type UseCartTotalResult = Pick<
  CartContextInterface,
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
