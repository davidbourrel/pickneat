import { useCart } from './hooks';

export const useCartTotalPrice = () => {
  const { cart } = useCart();

  return cart.reduce(
    (total: number, { amount, price }) =>
      amount ? total + amount * price : total * price,
    0
  );
};
