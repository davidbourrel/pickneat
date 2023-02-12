import { FormEvent, useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import useSubmit from 'contexts/checkoutContext/useSubmit';
import useCardNumber from 'contexts/checkoutContext/useCardNumber';

// Static components
import TextInput from './inputs/TextInput';

const CardNumberField = () => {
  const { cardNumber, setCardNumber, setIsCardNumberInError } = useCardNumber();
  const { isSubmitted } = useSubmit();

  const t = useTranslations('Checkout');

  const handleChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;

      setCardNumber(input?.value);
    },
    [setCardNumber]
  );

  const id = 'card_number_field';
  const label = useMemo(() => t('cardNumber'), [t]);

  return (
    <TextInput
      id={id}
      label={label}
      showError={isSubmitted}
      value={cardNumber}
      onChange={handleChange}
      setErrorStatus={setIsCardNumberInError}
      maxLength={19}
      placeholder="0000 0000 0000 0000"
      required
    />
  );
};
export default CardNumberField;
