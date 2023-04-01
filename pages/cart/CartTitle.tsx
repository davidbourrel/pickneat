import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './Cart.module.css';
import { CartTitleProps } from '_types/cart';

// Static components
import Button from 'components/elements/buttons/Button';
import Heading from 'components/elements/Heading';

const CartTitle = ({ cartTotalItems }: CartTitleProps) => {
  const t = useTranslations('Cart');

  const emptyCartTitle = (
    <>
      <Heading level={1} className={styles.title}>
        {t('emptyCartText')}
      </Heading>
      <Link href="/" tabIndex={-1}>
        <Button>{t('backToProducts')}</Button>
      </Link>
    </>
  );

  const notEmptyCartTitle = (
    <Heading level={1} className={styles.title}>
      {t('cart')}
    </Heading>
  );

  return cartTotalItems === 0 ? emptyCartTitle : notEmptyCartTitle;
};
export default CartTitle;
