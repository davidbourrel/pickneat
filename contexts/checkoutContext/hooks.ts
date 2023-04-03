import { useContext } from 'react';
import { CheckoutContext, CheckoutDispatchContext } from './contexts';

export const useCheckout = () => useContext(CheckoutContext);
export const useCheckoutDispatch = () => useContext(CheckoutDispatchContext);
