import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import styles from '../Checkout.module.css';

// Static components
import { EmailField } from 'components/fields/EmailField';
import { FullNameField } from 'components/fields/FullNameField';
import { PhoneField } from 'components/fields/PhoneField';

export default function ContactInfo() {
  const t = useTranslations('Checkout');

  const legend = useMemo(() => t('userInfo'), [t]);

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      <FullNameField />
      <PhoneField />
      <EmailField />
    </fieldset>
  );
}
