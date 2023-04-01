import { FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import useCheckoutSubmit from 'contexts/checkoutContext/useCheckoutSubmit';
import useCardNumber from 'contexts/checkoutContext/useCardNumber';

// Static components
import TextInput from './inputs/TextInput';

const CardNumberField = () => {
  const { cardNumber, setCardNumber, setIsCardNumberInError } = useCardNumber();
  const { isSubmitted } = useCheckoutSubmit();

  const t = useTranslations('Checkout');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;

    setCardNumber(input?.value);
  };

  return (
    <TextInput
      id="card_number_field"
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
