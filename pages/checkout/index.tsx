import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Heading from 'components/elements/Heading';
import Loader from 'components/elements/Loader';
import Button from 'components/elements/buttons/Button';
import MainLayout from 'components/modules/MainLayout';
import PageLayout from 'components/modules/PageLayout';
import {
  useCheckout,
  useCheckoutDispatch,
} from 'contexts/checkoutContext/hooks';
import { pick } from 'lodash';
import type { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import { useCartTotalItems } from 'stores/useCartStore';
import styles from './Checkout.module.css';
import ContactInfo from './ContactInfo';
import PaymentInfo from './PaymentInfo';

const Checkout = () => {
  const t = useTranslations('Checkout');

  const { isValidForm } = useCheckout();
  const { handleCheckoutSubmit } = useCheckoutDispatch();

  const cartTotalItems = useCartTotalItems();

  const isValidCart = !!cartTotalItems && cartTotalItems > 0;

  return (
    <MainLayout>
      <Head>
        <title>{`PickN\`Eat | ${t('checkout')}`}</title>
      </Head>
      <Heading level={1} className={styles.title}>
        {t('checkout')}
      </Heading>

      <form onSubmit={handleCheckoutSubmit}>
        <div className={styles.fieldsetContainer}>
          <ContactInfo />
          <PaymentInfo />
        </div>
        <Button
          className={styles.submiButton}
          disabled={!isValidForm || !isValidCart}>
          <input type="submit" value={t('confirmAndPay')} />
        </Button>
      </form>
    </MainLayout>
  );
};

Checkout.messages = ['Checkout', 'Profile', 'Errors', ...PageLayout.messages];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        await import(`../../messages/${locale}.json`),
        Checkout.messages
      ),
    },
  };
}

export default withPageAuthRequired(Checkout, {
  onRedirecting: () => (
    <MainLayout>
      <Loader absoluteLoader />
    </MainLayout>
  ),
  onError: (error) => (
    <MainLayout>
      <p>{error.message}</p>
    </MainLayout>
  ),
});
