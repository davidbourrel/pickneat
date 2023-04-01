import { FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import useFullName from 'contexts/checkoutContext/useFullName';
import useCheckoutSubmit from 'contexts/checkoutContext/useCheckoutSubmit';

// Static components
import TextInput from './inputs/TextInput';

const FullNameField = () => {
  const { fullName, setFullName, setIsFullNameInError } = useFullName();
  const { isSubmitted } = useCheckoutSubmit();

  const t = useTranslations('Profile');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;

    setFullName(input?.value);
  };

  return (
    <TextInput
      id="full_name_field"
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
