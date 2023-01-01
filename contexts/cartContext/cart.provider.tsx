import { useState, useCallback, useMemo, ReactNode, useEffect } from 'react';
import { PICKNEAT_CART } from '_constants/localStorage';
import { Product } from '_types/products';
import cartContext from './cart.context';
import { CartContextInterface } from './cart.types';

const { Provider } = cartContext;

interface CartProviderProps {
  children: ReactNode;
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState([] as Product[]);

  /***************
   * Get cart from the local storage on load
   /**************/
  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(
      localStorage.getItem(PICKNEAT_CART) as string
    ) as Product[];

    if (cartFromLocalStorage?.length > 0) {
      setCart(cartFromLocalStorage);
    }
  }, []);

  const cartTotalPrice = useMemo(
    () =>
      cart.reduce((total: number, item) => total + item.amount * item.price, 0),
    [cart]
  );

  const cartTotalItems = useMemo(
    () => cart.reduce((total: number, item) => total + item.amount, 0),
    [cart]
  );

  const addToCart = useCallback((clickedItem: Product) => {
    setCart((currentCart) => {
      // Is the item already added in the current cart?
      const indexOfClickedItem = currentCart.findIndex(
        (item) => item.product_id === clickedItem.product_id
      );
      const itemAlreadyExists = indexOfClickedItem !== -1;

      if (itemAlreadyExists) {
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
      }, [] as Product[])
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

  const removeAllFromCart = useCallback(() => setCart([] as Product[]), []);

  /***************
   * Set cart to the local storage
   /**************/
  useEffect(() => {
    localStorage.setItem(PICKNEAT_CART, JSON.stringify(cart));
  }, [cart]);

  const contextValue: CartContextInterface = useMemo(
    () => ({
      cart,
      cartTotalPrice,
      cartTotalItems,
      addToCart,
      removeFromCart,
      removeItemsFromCart,
      removeAllFromCart,
    }),
    [
      cart,
      cartTotalPrice,
      cartTotalItems,
      addToCart,
      removeFromCart,
      removeItemsFromCart,
      removeAllFromCart,
    ]
  );

  return <Provider value={contextValue}>{children}</Provider>;
}
