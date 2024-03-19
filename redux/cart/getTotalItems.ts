import { Product } from '_types/products';

export const getTotalItems = ({ cart }: { cart: Product[] }) => {
  return cart.length
    ? cart.reduce(
        (total: number, { amount }) => (amount ? total + amount : total),
        0
      )
    : 0;
};
