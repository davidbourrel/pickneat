import { FormEvent, useCallback, useMemo } from 'react';
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

  const handleChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;

      setExpirationDate(input?.value);
    },
    [setExpirationDate]
  );

  const id = 'expiration_date_field';
  const label = useMemo(() => t('expirationDate'), [t]);

  return (
    <TextInput
      id={id}
      label={label}
      showError={isSubmitted}
      value={expirationDate}
      onChange={handleChange}
      setErrorStatus={setIsExpirationDateInError}
      maxLength={5}
      placeholder="MM/YY"
      required
    />
  );
};
export default ExpirationDateField;
