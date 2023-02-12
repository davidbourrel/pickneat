import { useContext, useMemo } from 'react';
import cartContext from '.';
import { CartContext } from './cart.types';

type UseRemoveCartResult = Pick<
  CartContext,
  'removeFromCart' | 'removeItemsFromCart' | 'removeAllFromCart'
>;

const useRemoveCart = (): UseRemoveCartResult => {
  const { removeFromCart, removeItemsFromCart, removeAllFromCart } =
    useContext(cartContext);

  return useMemo(
    () => ({ removeFromCart, removeItemsFromCart, removeAllFromCart }),
    [removeFromCart, removeItemsFromCart, removeAllFromCart]
  );
};

export default useRemoveCart;
