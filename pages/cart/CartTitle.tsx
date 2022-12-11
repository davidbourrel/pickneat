import { useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './Cart.module.css';
import Button from 'components/elements/buttons/Button';
import Heading from 'components/elements/Heading';

interface CartTitleProps {
  cartTotalItems: number;
}

export default function CartTitle({ cartTotalItems }: CartTitleProps) {
  const t = useTranslations('Cart');

  const emptyCartTitle = useMemo(
    () => (
      <>
        <Heading level={1} className={styles.title}>
          {t('emptyCartText')}
        </Heading>
        <Button>
          <Link href="/">{t('backToProducts')}</Link>
        </Button>
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
}
