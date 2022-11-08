import { createContext } from 'react';
import { INITIAL_CART_CONTEXT } from './cart.const';

const cartContext = createContext(INITIAL_CART_CONTEXT);

export default cartContext;
