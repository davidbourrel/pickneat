import { useMemo } from 'react';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { pick } from 'lodash';
import styles from './Cart.module.css';
import useTotalCart from 'contexts/cartContext/useCartTotal';
import PageLayout from 'components/modules/PageLayout';
import CartProduct from 'components/elements/CartProduct';
import CartTitle from './CartTitle';
import CartDescription from './CartDescription';
import CartProductList from './CartProductList';
import CartCheckout from './CartCheckout';

export default function Cart() {
  const t = useTranslations('Cart');

  const { cartTotalItems } = useTotalCart();

  const mainClassName = useMemo(
    () => (cartTotalItems === 0 ? `sidePadding ${styles.main}` : 'sidePadding'),
    [cartTotalItems]
  );

  return (
    <main className={mainClassName}>
      <Head>
        <title>{`PickN\`Eat | ${t('cart')}`}</title>
      </Head>
      <section className={styles.section}>
        <CartTitle cartCount={cartTotalItems} />
        <CartDescription cartCount={cartTotalItems} />
        <CartProductList />
        <CartCheckout />
      </section>
    </main>
  );
}

Cart.messages = ['Cart', ...PageLayout.messages, ...CartProduct.messages];

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
