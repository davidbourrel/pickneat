import { useContext, useMemo } from 'react';
import cartContext from '.';
import { CartContext } from './cart.types';

type UseAddToCartResult = CartContext['addToCart'];

const useAddToCart = (): UseAddToCartResult => {
  const { addToCart } = useContext(cartContext);
  return useMemo(() => addToCart, [addToCart]);
};

export default useAddToCart;
