import { useContext, useMemo } from 'react';
import cartContext from '.';
import { CartContextInterface } from './cart.types';

type UseAddToCartResult = CartContextInterface['addToCart'];

const useAddToCart = (): UseAddToCartResult => {
  const { addToCart } = useContext(cartContext);
  return useMemo(() => addToCart, [addToCart]);
};

export default useAddToCart;
