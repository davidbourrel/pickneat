import { FormEvent, useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import useFullName from 'contexts/checkoutContext/useFullName';
import useCheckoutSubmit from 'contexts/checkoutContext/useCheckoutSubmit';

// Static components
import TextInput from './inputs/TextInput';

const FullNameField = () => {
  const { fullName, setFullName, setIsFullNameInError } = useFullName();
  const { isSubmitted } = useCheckoutSubmit();

  const t = useTranslations('Profile');

  const handleChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;

      setFullName(input?.value);
    },
    [setFullName]
  );

  const id = 'full_name_field';
  const label = useMemo(() => t('fullName'), [t]);

  return (
    <TextInput
      id={id}
      label={label}
      showError={isSubmitted}
      value={fullName}
      onChange={handleChange}
      setErrorStatus={setIsFullNameInError}
      maxLength={100}
      required
    />
  );
};
export default FullNameField;
