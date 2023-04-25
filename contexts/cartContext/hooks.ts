import { useContext } from 'react';
import { CartContext, CartDispatchContext } from './contexts';

export const useCart = () => useContext(CartContext);
export const useCartDispatch = () => useContext(CartDispatchContext);

export const useCartTotalItems = () => {
  const { cart } = useCart();
  return cart.reduce(
    (total: number, { amount }) => (amount ? total + amount : total),
    0
  );
};

export const useCartTotalPrice = () => {
  const { cart } = useCart();

  return cart.reduce(
    (total: number, { amount, price }) =>
      amount ? total + amount * price : total * price,
    0
  );
};
