import { useContext, useMemo } from 'react';
import cartContext from '.';
import { CartContextInterface } from './cart.types';

type UseCartResult = Pick<CartContextInterface, 'cart' | 'setCart'>;

const useCart = (): UseCartResult => {
  const { cart, setCart } = useContext(cartContext);
  return useMemo(() => ({ cart, setCart }), [cart, setCart]);
};

export default useCart;
