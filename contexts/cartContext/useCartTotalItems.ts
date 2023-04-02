import { useCart } from './useCart';

export const useCartTotalItems = () => {
  const cart = useCart();
  return cart.reduce(
    (total: number, { amount }) => (amount ? total + amount : total),
    0
  );
};
