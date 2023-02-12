import { FormEvent, useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import usePhone from 'contexts/checkoutContext/usePhone';
import useSubmit from 'contexts/checkoutContext/useSubmit';

// Static components
import TextInput from './inputs/TextInput';

const PhoneField = () => {
  const { phone, setPhone, setIsPhoneInError } = usePhone();
  const { isSubmitted } = useSubmit();

  const t = useTranslations('Profile');

  const handleChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;

      setPhone(input?.value ?? '');
    },
    [setPhone]
  );

  const id = 'phone_field';
  const label = useMemo(() => t('phone'), [t]);

  return (
    <TextInput
      id={id}
      label={label}
      showError={isSubmitted}
      value={phone}
      onChange={handleChange}
      setErrorStatus={setIsPhoneInError}
      maxLength={14}
      placeholder="07 00 00 00 00"
      required
    />
  );
};
export default PhoneField;
