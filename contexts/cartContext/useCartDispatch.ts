import { useContext } from 'react';
import { CartDispatchContext } from '.';

export const useCartDispatch = () => useContext(CartDispatchContext);
