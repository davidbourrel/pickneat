import { useTranslations } from 'next-intl';
import styles from './Cart.module.css';
import Button from 'components/elements/buttons/Button';

export default function CheckoutButton() {
  const t = useTranslations('Cart');

  return (
    <Button className={styles.checkoutButton}>{t('proceedToCheckout')}</Button>
  );
}
