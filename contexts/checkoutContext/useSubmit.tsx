import { useContext, useMemo } from 'react';
import checkoutContext from '.';
import { CheckoutContext } from './checkout.types';

type UseSubmit = Pick<
  CheckoutContext,
  'isSubmitted' | 'handleSubmit' | 'isValidForm'
>;

const useSubmit = (): UseSubmit => {
  const { isSubmitted, handleSubmit, isValidForm } =
    useContext(checkoutContext);
  return useMemo(
    () => ({ isSubmitted, handleSubmit, isValidForm }),
    [isSubmitted, handleSubmit, isValidForm]
  );
};

export default useSubmit;
