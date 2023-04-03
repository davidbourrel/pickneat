import { useContext } from 'react';
import { CartContext, CartDispatchContext } from './contexts';

export const useCart = () => useContext(CartContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
