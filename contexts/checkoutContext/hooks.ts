import { useContext } from 'react';
import { CheckoutContext, CheckoutDispatchContext } from './context';

export const useCheckout = () => useContext(CheckoutContext);
export const useCheckoutDispatch = () => useContext(CheckoutDispatchContext);
