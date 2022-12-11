import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Cart.module.css';
import CheckoutButton from './CheckoutButton';

interface CartDescriptionProps {
  cartTotalItems: number;
}

export default function CartDescription({
  cartTotalItems,
}: CartDescriptionProps) {
  const t = useTranslations('Cart');

  const cartDescription = useMemo(
    () =>
      cartTotalItems > 0 ? (
        <div className={styles.cartDescription}>
          <p>{t('cartCountInformation', { cartCount: cartTotalItems })}</p>
          <CheckoutButton />
        </div>
      ) : null,
    [cartTotalItems, t]
  );

  return cartDescription;
}
