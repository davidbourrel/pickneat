import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { pick } from 'lodash';
import Heading from 'components/elements/Heading';
import PageLayout from 'components/modules/PageLayout';

export default function Cart() {
  const t = useTranslations('Cart');

  return (
    <main className="sidePadding">
      <Head>
        <title>{`PickN\`Eat | ${t('cart')}`}</title>
      </Head>
      <Heading level={1}>CART PAGE</Heading>
    </main>
  );
}

Cart.messages = ['Cart', ...PageLayout.messages];

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
