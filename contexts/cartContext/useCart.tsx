import { useContext, useMemo } from 'react';
import cartContext from '.';
import { CartContext } from './cart.types';

type UseCartResult = CartContext['cart'];

const useCart = (): UseCartResult => {
  const { cart } = useContext(cartContext);
  return useMemo(() => cart, [cart]);
};

export default useCart;
