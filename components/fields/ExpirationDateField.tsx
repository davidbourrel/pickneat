import { FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import useCheckoutSubmit from 'contexts/checkoutContext/useCheckoutSubmit';
import useExpirationDate from 'contexts/checkoutContext/useExpirationDate';

// Static components
import TextInput from './inputs/TextInput';

const ExpirationDateField = () => {
  const { expirationDate, setExpirationDate, setIsExpirationDateInError } =
    useExpirationDate();
  const { isSubmitted } = useCheckoutSubmit();

  const t = useTranslations('Checkout');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;

    setExpirationDate(input?.value);
  };

  return (
    <TextInput
      id="expiration_date_field"
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
