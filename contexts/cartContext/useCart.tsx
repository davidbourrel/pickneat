import { useContext, useMemo } from 'react';
import cartContext from '.';
import { CartContextInterface } from './cart.types';

type UseCartResult = CartContextInterface['cart'];

const useCart = (): UseCartResult => {
  const { cart } = useContext(cartContext);
  return useMemo(() => cart, [cart]);
};

export default useCart;
