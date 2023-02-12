import { createContext } from 'react';
import { INITIAL_CHECKOUT_CONTEXT } from './checkout.const';

const checkoutContext = createContext(INITIAL_CHECKOUT_CONTEXT);

export default checkoutContext;
