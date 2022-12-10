import { useTranslations } from 'next-intl';
import styles from './Cart.module.css';
import CheckoutButton from './CheckoutButton';

interface CartDescriptionProps {
  cartCount: number;
}

export default function CartDescription({ cartCount }: CartDescriptionProps) {
  const t = useTranslations('Cart');

  return cartCount > 0 ? (
    <div className={styles.cartDescription}>
      <p>{t('cartCountInformation', { cartCount })}</p>
      <CheckoutButton />
    </div>
  ) : null;
}
