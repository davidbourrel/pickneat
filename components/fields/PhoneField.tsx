import { FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import {
  useCheckout,
  useCheckoutDispatch,
} from 'contexts/checkoutContext/hooks';

// Static components
import TextInput from './inputs/TextInput';

const PhoneField = () => {
  const { phone, isSubmitted } = useCheckout();
  const { setPhone, setIsPhoneInError } = useCheckoutDispatch();

  const t = useTranslations('Profile');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;

    setPhone(input?.value ?? '');
  };

  return (
    <TextInput
      id="phone_field"
      label={t('phone')}
      showError={isSubmitted}
      value={phone}
      onChange={handleInputChange}
      setErrorStatus={setIsPhoneInError}
      maxLength={14}
      placeholder="07 00 00 00 00"
      required
    />
  );
};
export default PhoneField;
