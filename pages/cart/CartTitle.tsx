import { useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './Cart.module.css';
import { CartTitleProps } from '_types/cart';

// Static components
import Button from 'components/elements/buttons/Button';
import Heading from 'components/elements/Heading';

const CartTitle = ({ cartTotalItems }: CartTitleProps) => {
  const t = useTranslations('Cart');

  const emptyCartTitle = useMemo(
    () => (
      <>
        <Heading level={1} className={styles.title}>
          {t('emptyCartText')}
        </Heading>
        <Link href="/" tabIndex={-1}>
          <Button>{t('backToProducts')}</Button>
        </Link>
      </>
    ),
    [t]
  );

  const notEmptyCartTitle = useMemo(
    () => (
      <Heading level={1} className={styles.title}>
        {t('cart')}
      </Heading>
    ),
    [t]
  );

  const cartTitle = useMemo(
    () => (cartTotalItems === 0 ? emptyCartTitle : notEmptyCartTitle),
    [cartTotalItems, emptyCartTitle, notEmptyCartTitle]
  );

  return cartTitle;
};
export default CartTitle;
