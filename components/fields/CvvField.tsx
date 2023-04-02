import { FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import {
  useCheckout,
  useCheckoutDispatch,
} from 'contexts/checkoutContext/hooks';

// Static components
import TextInput from './inputs/TextInput';

const CvvField = () => {
  const { cvv, isSubmitted } = useCheckout();
  const { setCvv, setIsCvvInError } = useCheckoutDispatch();

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
