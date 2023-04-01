import { useContext } from 'react';
import checkoutContext from '.';
import { CheckoutContext } from './checkout.types';

type UseExpirationDate = Pick<
  CheckoutContext,
  | 'expirationDate'
  | 'setExpirationDate'
  | 'isExpirationDateInError'
  | 'setIsExpirationDateInError'
>;

const useExpirationDate = (): UseExpirationDate => {
  const {
    expirationDate,
    setExpirationDate,
    isExpirationDateInError,
    setIsExpirationDateInError,
  } = useContext(checkoutContext);

  return {
    expirationDate,
    setExpirationDate,
    isExpirationDateInError,
    setIsExpirationDateInError,
  };
};

export default useExpirationDate;
