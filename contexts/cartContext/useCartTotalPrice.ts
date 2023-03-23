import { useCart } from './useCart';

export const useCartTotalPrice = () => {
  const cart = useCart();
  return cart.reduce(
    (total: number, item) => total + item.amount * item.price,
    0
  );
};
