import { FormEvent, useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import useSubmit from 'contexts/checkoutContext/useSubmit';
import useExpirationDate from 'contexts/checkoutContext/useExpirationDate';

// Static components
import TextInput from './inputs/TextInput';

export function ExpirationDateField() {
  const { expirationDate, setExpirationDate, setIsExpirationDateInError } =
    useExpirationDate();
  const { isSubmitted } = useSubmit();

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
}
