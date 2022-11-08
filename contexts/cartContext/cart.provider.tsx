import { FC, useState, useCallback, useMemo, ReactNode } from 'react';
import { Products } from '_types/products';
import cartContext from './cart.context';
import { CartContextInterface } from './cart.types';

const { Provider } = cartContext;

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState([] as Products[]);

  const cartTotalPrice = useMemo(
    () =>
      cart.reduce((total: number, item) => total + item.amount * item.price, 0),
    [cart]
  );

  const cartTotalItems = useMemo(
    () => cart.reduce((total: number, item) => total + item.amount, 0),
    [cart]
  );

  const addToCart = useCallback((clickedItem: Products) => {
    setCart((currentCart) => {
      // Is the item already added in the cart?
      const checkIndex = currentCart.findIndex(
        (item) => item.product_id === clickedItem.product_id
      );

      if (checkIndex !== -1) {
        return currentCart.map((item) =>
          item.product_id === clickedItem.product_id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...currentCart, { ...clickedItem, amount: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((product_id: string) => {
    setCart((currentCart) =>
      currentCart.reduce((total, item) => {
        if (item.product_id === product_id) {
          if (item.amount === 1) return total;
          return [...total, { ...item, amount: item.amount - 1 }];
        } else {
          return [...total, item];
        }
      }, [] as Products[])
    );
  }, []);

  const removeItemsFromCart = useCallback((product_id: string) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.product_id === product_id
      );

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  }, []);

  const removeAllFromCart = useCallback(() => setCart([] as Products[]), []);

  const contextValue: CartContextInterface = useMemo(
    () => ({
      cart,
      setCart,
      cartTotalPrice,
      cartTotalItems,
      addToCart,
      removeFromCart,
      removeItemsFromCart,
      removeAllFromCart,
    }),
    [
      cart,
      setCart,
      cartTotalPrice,
      cartTotalItems,
      addToCart,
      removeFromCart,
      removeItemsFromCart,
      removeAllFromCart,
    ]
  );

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CartProvider;
