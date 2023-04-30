import { FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import {
  useCheckout,
  useCheckoutDispatch,
} from 'contexts/checkoutContext/hooks';

// Static components
import TextInput from './inputs/TextInput';

const NameOnCardField = () => {
  const { nameOnCard, isSubmitted } = useCheckout();
  const { setNameOnCard, setIsNameOnCardInError } = useCheckoutDispatch();

  const t = useTranslations('Checkout');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;

    setNameOnCard(input?.value);
  };

  return (
    <TextInput
      label={t('nameOnCard')}
      showError={isSubmitted}
      value={nameOnCard}
      onChange={handleInputChange}
      setErrorStatus={setIsNameOnCardInError}
      maxLength={100}
      required
    />
  );
};
export default NameOnCardField;
