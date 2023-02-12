import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import styles from '../Checkout.module.css';
import { NameOnCardField } from 'components/fields/NameOnCardField';
import { CardNumberField } from 'components/fields/CardNumberField';
import { ExpirationDateField } from 'components/fields/ExpirationDateField';
import { CvvField } from 'components/fields/CvvField';

export default function PaymentInfo() {
  const t = useTranslations('Checkout');

  const legend = useMemo(() => t('payment'), [t]);

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      <NameOnCardField />
      <CardNumberField />
      <div className={styles.dateAndCvvContainer}>
        <ExpirationDateField />
        <CvvField />
      </div>
    </fieldset>
  );
}
