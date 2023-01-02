import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Cart.module.css';
import Button from 'components/elements/buttons/Button';
import Link from 'components/elements/Link';

export default function CheckoutButton() {
  const t = useTranslations('Cart');

  const checkoutButton = useMemo(
    () => (
      <Link href="/checkout" tabIndex={-1}>
        <Button className={styles.checkoutButton}>
          {t('proceedToCheckout')}
        </Button>
      </Link>
    ),
    [t]
  );

  return checkoutButton;
}
