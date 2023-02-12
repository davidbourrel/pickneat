import { useContext, useMemo } from 'react';
import checkoutContext from '.';
import { CheckoutContext } from './checkout.types';

type UsePhone = Pick<
  CheckoutContext,
  'phone' | 'setPhone' | 'isPhoneInError' | 'setIsPhoneInError'
>;

const usePhone = (): UsePhone => {
  const { phone, setPhone, isPhoneInError, setIsPhoneInError } =
    useContext(checkoutContext);
  return useMemo(
    () => ({ phone, setPhone, isPhoneInError, setIsPhoneInError }),
    [phone, setPhone, isPhoneInError, setIsPhoneInError]
  );
};

export default usePhone;