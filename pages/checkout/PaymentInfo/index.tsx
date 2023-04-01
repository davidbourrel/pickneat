import { useTranslations } from 'next-intl';
import styles from '../Checkout.module.css';

// Static components
import NameOnCardField from 'components/fields/NameOnCardField';
import CardNumberField from 'components/fields/CardNumberField';
import ExpirationDateField from 'components/fields/ExpirationDateField';
import CvvField from 'components/fields/CvvField';

const PaymentInfo = () => {
  const t = useTranslations('Checkout');

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{t('payment')}</legend>
      <NameOnCardField />
      <CardNumberField />
      <div className={styles.dateAndCvvContainer}>
        <ExpirationDateField />
        <CvvField />
      </div>
    </fieldset>
  );
};
export default PaymentInfo;
