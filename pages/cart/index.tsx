import { useMemo } from 'react';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { pick } from 'lodash';
import styles from './Cart.module.css';
import useCartTotal from 'contexts/cartContext/useCartTotal';

// Static components
import PageLayout from 'components/modules/PageLayout';
import CartTitle from './CartTitle';
import CartDescription from './CartDescription';
import CartCheckout from './CartCheckout';
import MainContentLayout from 'components/modules/MainContentLayout';
import CartProductList from './CartProductList';

const Cart = () => {
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
};
export default Cart;

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
