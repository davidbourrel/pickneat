import { createContext } from 'react';
import { CheckoutContextValue, CheckoutDispatchContextValue } from './types';

export const CheckoutContext = createContext(
  null as unknown as CheckoutContextValue
);
export const CheckoutDispatchContext = createContext(
  null as unknown as CheckoutDispatchContextValue
);
