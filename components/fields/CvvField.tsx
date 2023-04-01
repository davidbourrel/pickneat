import { FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import useCheckoutSubmit from 'contexts/checkoutContext/useCheckoutSubmit';
import useCvv from 'contexts/checkoutContext/useCvv';

// Static components
import TextInput from './inputs/TextInput';

const CvvField = () => {
  const { cvv, setCvv, setIsCvvInError } = useCvv();
  const { isSubmitted } = useCheckoutSubmit();

  const t = useTranslations('Checkout');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;

    setCvv(input?.value);
  };

  return (
    <TextInput
      id="cvv_field"
      label={t('cvv')}
      showError={isSubmitted}
      value={cvv}
      onChange={handleInputChange}
      setErrorStatus={setIsCvvInError}
      maxLength={3}
      placeholder="***"
      required
    />
  );
};
export default CvvField;
