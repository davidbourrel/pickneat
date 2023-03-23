import { useCart } from './useCart';

export const useCartTotalItems = () => {
  const cart = useCart();
  return cart.reduce((total: number, item) => total + item.amount, 0);
};
