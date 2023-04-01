import { FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import useCheckoutSubmit from 'contexts/checkoutContext/useCheckoutSubmit';
import useNameOnCard from 'contexts/checkoutContext/useNameOnCard';

// Static components
import TextInput from './inputs/TextInput';

const NameOnCardField = () => {
  const { nameOnCard, setNameOnCard, setIsNameOnCardInError } = useNameOnCard();
  const { isSubmitted } = useCheckoutSubmit();

  const t = useTranslations('Checkout');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;

    setNameOnCard(input?.value);
  };

  return (
    <TextInput
      id="name_on_card_field"
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
