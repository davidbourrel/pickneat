import { FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import {
  useCheckout,
  useCheckoutDispatch,
} from 'contexts/checkoutContext/hooks';

// Static components
import TextInput from './inputs/TextInput';

const ExpirationDateField = () => {
  const { expirationDate, isSubmitted } = useCheckout();
  const { setExpirationDate, setIsExpirationDateInError } =
    useCheckoutDispatch();

  const t = useTranslations('Checkout');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;

    setExpirationDate(input?.value);
  };

  return (
    <TextInput
      label={t('expirationDate')}
      showError={isSubmitted}
      value={expirationDate}
      onChange={handleInputChange}
      setErrorStatus={setIsExpirationDateInError}
      maxLength={5}
      placeholder="MM/YY"
      required
    />
  );
};
export default ExpirationDateField;
