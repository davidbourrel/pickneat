import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useCartTotalItems } from 'stores/useCartStore';
import Button from '../Button';
import styles from './ViewCartButton.module.css';

const ViewCartButton = () => {
  const t = useTranslations('Cart');

  const cartTotalItems = useCartTotalItems();

  const viewCartContainerClassName = `${styles.viewCartContainer} ${
    cartTotalItems > 0 ? styles.active : ''
  }`;

  return (
    <div className={viewCartContainerClassName} data-test="viewCartButton">
      <Link href="/cart" className={styles.viewCart} tabIndex={-1}>
        <Button>{t('viewCart', { cartCount: cartTotalItems })}</Button>
      </Link>
    </div>
  );
};
export default ViewCartButton;
