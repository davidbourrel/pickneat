import { FormEvent, useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import useCheckoutSubmit from 'contexts/checkoutContext/useCheckoutSubmit';
import useCvv from 'contexts/checkoutContext/useCvv';

// Static components
import TextInput from './inputs/TextInput';

const CvvField = () => {
  const { cvv, setCvv, setIsCvvInError } = useCvv();
  const { isSubmitted } = useCheckoutSubmit();

  const t = useTranslations('Checkout');

  const handleChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;

      setCvv(input?.value);
    },
    [setCvv]
  );

  const id = 'cvv_field';
  const label = useMemo(() => t('cvv'), [t]);

  return (
    <TextInput
      id={id}
      label={label}
      showError={isSubmitted}
      value={cvv}
      onChange={handleChange}
      setErrorStatus={setIsCvvInError}
      maxLength={3}
      placeholder="***"
      required
    />
  );
};
export default CvvField;
