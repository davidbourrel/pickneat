import type { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { pick } from 'lodash';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import useCartTotal from 'contexts/cartContext/useCartTotal';
import useSubmit from 'contexts/checkoutContext/useSubmit';
import styles from './Checkout.module.css';

// Static components
import MainContentLayout from 'components/modules/MainContentLayout';
import Heading from 'components/elements/Heading';
import Loader from 'components/elements/Loader';
import PageLayout from 'components/modules/PageLayout';
import ContactInfo from './ContactInfo';
import PaymentInfo from './PaymentInfo';
import Button from 'components/elements/buttons/Button';

const Checkout = () => {
  const t = useTranslations('Checkout');

  const { handleSubmit, isValidForm } = useSubmit();

  const { push } = useRouter();

  const { cartTotalItems } = useCartTotal();

  const isValidCart = !!cartTotalItems && cartTotalItems > 0;

  /**
   * Redirect to home page if cart is empty
   */
  if (!isValidCart) {
    push('/');

    return (
      <MainContentLayout>
        <Loader absoluteLoader={true} />
      </MainContentLayout>
    );
  }

  return (
    <MainContentLayout>
      <Head>
        <title>{`PickN\`Eat | ${t('checkout')}`}</title>
      </Head>
      <Heading level={1} className={styles.title}>
        {t('checkout')}
      </Heading>

      <form onSubmit={handleSubmit}>
        <div className={styles.fieldsetContainer}>
          <ContactInfo />
          <PaymentInfo />
        </div>
        <Button className={styles.submiButton} disabled={!isValidForm}>
          <input type="submit" value={t('confirmAndPay')} />
        </Button>
      </form>
    </MainContentLayout>
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
    <MainContentLayout>
      <Loader absoluteLoader />
    </MainContentLayout>
  ),
  onError: (error) => (
    <MainContentLayout>
      <p>{error.message}</p>
    </MainContentLayout>
  ),
});
