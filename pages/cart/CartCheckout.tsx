import { useTranslations } from 'next-intl';
import styles from './Cart.module.css';
import { CartCheckoutProps } from '_types/cart';
import { formatNumberToPrice } from 'utils/formatNumberToPrice';

// Static components
import CheckoutButton from './CheckoutButton';
import Link from 'components/elements/Link';
import Button from 'components/elements/buttons/Button';

const CartCheckout = ({
  cartTotalItems,
  cartTotalPrice,
}: CartCheckoutProps) => {
  const t = useTranslations('Cart');

  const subTotalPrice = (
    <div className={`${styles.cartCheckoutWrapper} ${styles.subTotalPrice}`}>
      <span>{t('subTotalPrice')}</span>
      <span>{formatNumberToPrice(cartTotalPrice)}</span>
    </div>
  );

  const totalPrice = (
    <div className={`${styles.cartCheckoutWrapper} ${styles.totalPrice}`}>
      <span>{t('totalPrice')}</span>
      <span>{formatNumberToPrice(cartTotalPrice)}</span>
    </div>
  );

  const buttonsAction = (
    <div className={styles.cartCheckoutWrapper}>
      <Link href="/" tabIndex={-1}>
        <Button border>{t('continueShopping')}</Button>
      </Link>
      <CheckoutButton />
    </div>
  );

  const cartCheckout =
    cartTotalItems > 0 ? (
      <div className={styles.cartCheckout}>
        {subTotalPrice}
        {totalPrice}
        {buttonsAction}
      </div>
    ) : null;

  return cartCheckout;
};
export default CartCheckout;
