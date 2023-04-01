import { useContext } from 'react';
import checkoutContext from '.';
import { CheckoutContext } from './checkout.types';

type UseFullName = Pick<
  CheckoutContext,
  'fullName' | 'setFullName' | 'isFullNameInError' | 'setIsFullNameInError'
>;

const useFullName = (): UseFullName => {
  const { fullName, setFullName, isFullNameInError, setIsFullNameInError } =
    useContext(checkoutContext);

  return { fullName, setFullName, isFullNameInError, setIsFullNameInError };
};

export default useFullName;
