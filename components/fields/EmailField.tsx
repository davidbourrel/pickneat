import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { useUser } from '@auth0/nextjs-auth0';

// Static components
import TextInput from './inputs/TextInput';

const EmailField = () => {
  const { user } = useUser();

  const t = useTranslations('Profile');

  const id = 'email_field';
  const label = useMemo(() => t('email'), [t]);

  return (
    <TextInput
      id={id}
      label={label}
      value={user?.email ?? ''}
      readOnly
      disabled
    />
  );
};
export default EmailField;
