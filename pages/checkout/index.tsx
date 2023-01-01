import type { GetStaticPropsContext } from 'next';
import PageLayout from 'components/modules/PageLayout';
import { pick } from 'lodash';
import MainContentLayout from 'components/modules/MainContentLayout';
import Head from 'next/head';
import Heading from 'components/elements/Heading';
import { useTranslations } from 'next-intl';
import { useUser } from '@auth0/nextjs-auth0';

export default function Checkout() {
  const t = useTranslations('Checkout');

  const { user } = useUser();

  return (
    <MainContentLayout>
      <Head>
        <title>{`PickN\`Eat | ${t('checkout')}`}</title>
      </Head>
      <Heading level={1}>{t('checkout')}</Heading>
      {user
        ? '[You are connected]'
        : '[You are not connected, so you cant checkout]'}
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
