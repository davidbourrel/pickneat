import { FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import {
  useCheckout,
  useCheckoutDispatch,
} from 'contexts/checkoutContext/hooks';

// Static components
import TextInput from './inputs/TextInput';

const CardNumberField = () => {
  const { cardNumber, isSubmitted } = useCheckout();
  const { setCardNumber, setIsCardNumberInError } = useCheckoutDispatch();

  const t = useTranslations('Checkout');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;

    setCardNumber(input?.value);
  };

  return (
    <TextInput
      label={t('cardNumber')}
      showError={isSubmitted}
      value={cardNumber}
      onChange={handleInputChange}
      setErrorStatus={setIsCardNumberInError}
      maxLength={16}
      required
    />
  );
};
export default CardNumberField;
