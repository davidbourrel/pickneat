import { FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import {
  useCheckout,
  useCheckoutDispatch,
} from 'contexts/checkoutContext/hooks';

// Static components
import TextInput from './inputs/TextInput';

const FullNameField = () => {
  const { fullName, isSubmitted } = useCheckout();
  const { setFullName, setIsFullNameInError } = useCheckoutDispatch();

  const t = useTranslations('Profile');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;

    setFullName(input?.value);
  };

  return (
    <TextInput
      label={t('fullName')}
      showError={isSubmitted}
      value={fullName}
      onChange={handleInputChange}
      setErrorStatus={setIsFullNameInError}
      maxLength={100}
      required
    />
  );
};
export default FullNameField;
