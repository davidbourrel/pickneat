import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import useFromStore from 'hooks/useFromStore';
import { Product } from '_types/products';

interface UseCartStoreState {
  cart: Product[];
  addItem: (product: Product) => void;
  deleteItem: (product: Product) => void;
  deleteItems: (product: Product) => void;
}

export const useCartStore = create(
  persist<UseCartStoreState>(
    (set, get) => ({
      cart: [],
      addItem: (product: Product) => {
        const cart = get().cart;
        const cartItem = cart.find(
          (item) => item.product_id === product.product_id
        );

        // If the item already exists in the Cart, increase its quantity
        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.product_id === product.product_id && item.amount
              ? { ...item, amount: item.amount + 1 }
              : item
          );
          set(() => ({
            cart: updatedCart,
          }));
        } else {
          const updatedCart = [...cart, { ...product, amount: 1 }];

          set(() => ({
            cart: updatedCart,
          }));
        }
      },
      deleteItem: (product: Product) => {
        set((state) => ({
          cart: state.cart.reduce((total, item) => {
            if (item.product_id === product.product_id && item.amount) {
              if (item.amount === 1) return total;
              return [...total, { ...item, amount: item.amount - 1 }];
            } else {
              return [...total, item];
            }
          }, [] as Product[]),
        }));
      },
      deleteItems: (product: Product) => {
        set((state) => ({
          cart: state.cart.filter(
            (item) => item.product_id !== product.product_id
          ),
        }));
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);

export const useCartTotalItems = () => {
  const cart = useFromStore(useCartStore, (state) => state.cart);

  return cart
    ? cart.reduce(
        (total: number, { amount }) => (amount ? total + amount : total),
        0
      )
    : 0;
};

export const useCartTotalPrice = () => {
  const cart = useFromStore(useCartStore, (state) => state.cart);

  return cart
    ? cart.reduce(
        (total: number, { amount, price }) =>
          amount ? total + amount * price : total * price,
        0
      )
    : 0;
};
