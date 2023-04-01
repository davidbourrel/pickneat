import { useTranslations } from 'next-intl';
import styles from '../Checkout.module.css';

// Static components
import EmailField from 'components/fields/EmailField';
import FullNameField from 'components/fields/FullNameField';
import PhoneField from 'components/fields/PhoneField';

const ContactInfo = () => {
  const t = useTranslations('Checkout');

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{t('userInfo')}</legend>
      <FullNameField />
      <PhoneField />
      <EmailField />
    </fieldset>
  );
};
export default ContactInfo;
