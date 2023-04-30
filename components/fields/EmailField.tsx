import { useTranslations } from 'next-intl';
import { useUser } from '@auth0/nextjs-auth0/client';

// Static components
import TextInput from './inputs/TextInput';

const EmailField = () => {
  const { user } = useUser();

  const t = useTranslations('Profile');

  return (
    <TextInput
      label={t('email')}
      value={user?.email ?? ''}
      readOnly
      disabled
      required
    />
  );
};
export default EmailField;
