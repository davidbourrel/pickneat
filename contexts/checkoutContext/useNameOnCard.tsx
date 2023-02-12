import { useContext, useMemo } from 'react';
import checkoutContext from '.';
import { CheckoutContext } from './checkout.types';

type UseNameOnCard = Pick<
  CheckoutContext,
  | 'nameOnCard'
  | 'setNameOnCard'
  | 'isNameOnCardInError'
  | 'setIsNameOnCardInError'
>;

const useNameOnCard = (): UseNameOnCard => {
  const {
    nameOnCard,
    setNameOnCard,
    isNameOnCardInError,
    setIsNameOnCardInError,
  } = useContext(checkoutContext);
  return useMemo(
    () => ({
      nameOnCard,
      setNameOnCard,
      isNameOnCardInError,
      setIsNameOnCardInError,
    }),
    [nameOnCard, setNameOnCard, isNameOnCardInError, setIsNameOnCardInError]
  );
};

export default useNameOnCard;
