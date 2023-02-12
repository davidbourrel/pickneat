import { useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import useCartTotal from 'contexts/cartContext/useCartTotal';
import styles from './ViewCartButton.module.css';

// Static components
import Button from '../Button';

const ViewCartButton = () => {
  const t = useTranslations('Cart');

  const { cartTotalItems } = useCartTotal();

  const viewCartContainerClassName = useMemo(
    () =>
      `${styles.viewCartContainer} ${cartTotalItems > 0 ? styles.active : ''}`,
    [cartTotalItems]
  );

  return (
    <div className={viewCartContainerClassName} data-test="viewCartButton">
      <Link href="/cart" className={styles.viewCart} tabIndex={-1}>
        <Button>{t('viewCart', { cartCount: cartTotalItems })}</Button>
      </Link>
    </div>
  );
};
export default ViewCartButton;
