import { useContext } from 'react';
import checkoutContext from '.';
import { CheckoutContext } from './checkout.types';

type UseCardNumber = Pick<
  CheckoutContext,
  | 'cardNumber'
  | 'setCardNumber'
  | 'isCardNumberInError'
  | 'setIsCardNumberInError'
>;

const useCardNumber = (): UseCardNumber => {
  const {
    cardNumber,
    setCardNumber,
    isCardNumberInError,
    setIsCardNumberInError,
  } = useContext(checkoutContext);

  return {
    cardNumber,
    setCardNumber,
    isCardNumberInError,
    setIsCardNumberInError,
  };
};

export default useCardNumber;
