import { useContext } from 'react';
import { CartContext } from '.';

export const useCart = () => useContext(CartContext);
