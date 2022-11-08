import { useContext, useMemo } from 'react';
import cartContext from '.';
import { CartContextInterface } from './cart.types';

type UseRemoveCartResult = Pick<
  CartContextInterface,
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
