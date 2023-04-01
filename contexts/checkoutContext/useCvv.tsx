import { useContext } from 'react';
import checkoutContext from '.';
import { CheckoutContext } from './checkout.types';

type UseCvv = Pick<
  CheckoutContext,
  'cvv' | 'setCvv' | 'isCvvInError' | 'setIsCvvInError'
>;

const useCvv = (): UseCvv => {
  const { cvv, setCvv, isCvvInError, setIsCvvInError } =
    useContext(checkoutContext);

  return {
    cvv,
    setCvv,
    isCvvInError,
    setIsCvvInError,
  };
};

export default useCvv;
