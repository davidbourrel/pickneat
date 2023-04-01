import { useContext } from 'react';
import checkoutContext from '.';
import { CheckoutContext } from './checkout.types';

type UseCheckoutSubmit = Pick<
  CheckoutContext,
  'isSubmitted' | 'handleCheckoutSubmit' | 'isValidForm'
>;

const useCheckoutSubmit = (): UseCheckoutSubmit => {
  const { isSubmitted, handleCheckoutSubmit, isValidForm } =
    useContext(checkoutContext);

  return {
    isSubmitted,
    handleCheckoutSubmit,
    isValidForm,
  };
};

export default useCheckoutSubmit;
