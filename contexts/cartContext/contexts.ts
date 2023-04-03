import { createContext } from 'react';
import { CartContextValue, CartDispatchContextValue } from './types';

export const CartContext = createContext(null as unknown as CartContextValue);
export const CartDispatchContext = createContext(
  null as unknown as CartDispatchContextValue
);
