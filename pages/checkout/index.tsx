import type { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { pick } from 'lodash';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import MainContentLayout from 'components/modules/MainContentLayout';
import Heading from 'components/elements/Heading';
import PageLayout from 'components/modules/PageLayout';
import Loader from 'components/elements/Loader';

function Checkout() {
  const t = useTranslations('Checkout');

  return (
    <MainContentLayout>
      <Head>
        <title>{`PickN\`Eat | ${t('checkout')}`}</title>
      </Head>
      <Heading level={1}>{t('checkout')}</Heading>
    </MainContentLayout>
  );
}

Checkout.messages = ['Checkout', ...PageLayout.messages];

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
