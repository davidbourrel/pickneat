import MainLayout from 'components/modules/MainLayout';
import PageLayout from 'components/modules/PageLayout';
import { pick } from 'lodash';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import { useCartTotalItems, useCartTotalPrice } from 'stores/useCartStore';
import styles from './Cart.module.css';
import CartCheckout from './CartCheckout';
import CartDescription from './CartDescription';
import CartProductList from './CartProductList';
import CartTitle from './CartTitle';

const Cart = () => {
  const t = useTranslations('Cart');

  const cartTotalItems = useCartTotalItems();
  const cartTotalPrice = useCartTotalPrice();

  const layoutClassName = cartTotalItems === 0 ? styles.main : '';

  return (
    <MainLayout className={layoutClassName}>
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
    </MainLayout>
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
