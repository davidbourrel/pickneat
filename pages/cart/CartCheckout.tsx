import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Cart.module.css';
import { CartCheckoutProps } from './types';
import { formatNumberToPrice } from 'utils/formatNumberToPrice';

// Static components
import CheckoutButton from './CheckoutButton';
import Link from 'components/elements/Link';
import Button from 'components/elements/buttons/Button';

export default function CartCheckout({
  cartTotalItems,
  cartTotalPrice,
}: CartCheckoutProps) {
  const t = useTranslations('Cart');

  const subTotalPrice = useMemo(
    () => (
      <div className={`${styles.cartCheckoutWrapper} ${styles.subTotalPrice}`}>
        <span>{t('subTotalPrice')}</span>
        <span>{formatNumberToPrice(cartTotalPrice)}</span>
      </div>
    ),
    [t, cartTotalPrice]
  );

  const totalPrice = useMemo(
    () => (
      <div className={`${styles.cartCheckoutWrapper} ${styles.totalPrice}`}>
        <span>{t('totalPrice')}</span>
        <span>{formatNumberToPrice(cartTotalPrice)}</span>
      </div>
    ),
    [t, cartTotalPrice]
  );

  const buttonsAction = useMemo(
    () => (
      <div className={styles.cartCheckoutWrapper}>
        <Link href="/" tabIndex={-1}>
          <Button border>{t('continueShopping')}</Button>
        </Link>
        <CheckoutButton />
      </div>
    ),
    [t]
  );

  const cartCheckout = useMemo(
    () =>
      cartTotalItems > 0 ? (
        <div className={styles.cartCheckout}>
          {subTotalPrice}
          {totalPrice}
          {buttonsAction}
        </div>
      ) : null,
    [cartTotalItems, subTotalPrice, totalPrice, buttonsAction]
  );

  return cartCheckout;
}
