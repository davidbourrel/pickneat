import { useTranslations } from 'next-intl';
import styles from './Cart.module.css';
import { CartDescriptionProps } from '_types/cart';

// Static components
import CheckoutButton from './CheckoutButton';

const CartDescription = ({ cartTotalItems }: CartDescriptionProps) => {
  const t = useTranslations('Cart');

  return cartTotalItems > 0 ? (
    <div className={styles.cartDescription}>
      <p>{t('cartCountInformation', { cartCount: cartTotalItems })}</p>
      <CheckoutButton />
    </div>
  ) : null;
};
export default CartDescription;
