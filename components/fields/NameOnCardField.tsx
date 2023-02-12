import { FormEvent, useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import useSubmit from 'contexts/checkoutContext/useSubmit';
import useNameOnCard from 'contexts/checkoutContext/useNameOnCard';

// Static components
import TextInput from './inputs/TextInput';

const NameOnCardField = () => {
  const { nameOnCard, setNameOnCard, setIsNameOnCardInError } = useNameOnCard();
  const { isSubmitted } = useSubmit();

  const t = useTranslations('Checkout');

  const handleChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;

      setNameOnCard(input?.value);
    },
    [setNameOnCard]
  );

  const id = 'name_on_card_field';
  const label = useMemo(() => t('nameOnCard'), [t]);

  return (
    <TextInput
      id={id}
      label={label}
      showError={isSubmitted}
      value={nameOnCard}
      onChange={handleChange}
      setErrorStatus={setIsNameOnCardInError}
      maxLength={100}
      required
    />
  );
};
export default NameOnCardField;
