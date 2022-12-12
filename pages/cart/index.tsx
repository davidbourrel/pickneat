import { useMemo } from 'react';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { pick } from 'lodash';
import styles from './Cart.module.css';
import useCartTotal from 'contexts/cartContext/useCartTotal';
import PageLayout from 'components/modules/PageLayout';
import CartTitle from './CartTitle';
import CartDescription from './CartDescription';
import CartProductList from './CartProductList';
import CartCheckout from './CartCheckout';
import MainContentLayout from 'components/modules/MainContentLayout';

export default function Cart() {
  const t = useTranslations('Cart');

  const { cartTotalItems, cartTotalPrice } = useCartTotal();

  const layoutClassName = useMemo(
    () => (cartTotalItems === 0 ? styles.main : ''),
    [cartTotalItems]
  );

  return (
    <MainContentLayout className={layoutClassName}>
      <Head>
        <title>{`PickN\`Eat | ${t('cart')}`}</title>
      </Head>
      <section className={styles.section}>
        <CartTitle cartTotalItems={cartTotalItems} />
        <CartDescription cartTotalItems={cartTotalItems} />
        <CartProductList />
        <CartCheckout
          cartTotalItems={cartTotalItems}
          cartTotalPrice={cartTotalPrice}
        />
      </section>
    </MainContentLayout>
  );
}

Cart.messages = ['Cart', 'Product', ...PageLayout.messages];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        await import(`../../messages/${locale}.json`),
        Cart.messages
      ),
    },
  };
}
