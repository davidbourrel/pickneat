import type { GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { pick } from 'lodash';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

// PageLayout static import to use with next-intl
import PageLayout from 'components/modules/PageLayout';

// Dynamic imports
const Heading = dynamic(() => import('components/elements/Heading'));
const Loader = dynamic(() => import('components/elements/Loader'));
const MainContentLayout = dynamic(
  () => import('components/modules/MainContentLayout')
);

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
