import { FC } from 'react';
import Head from 'next/head';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import { useTranslations } from 'next-intl';
import { GetStaticProps } from 'next/types';

const Cart: FC = () => {
  const t = useTranslations('Cart');
  return (
    <main className="sidePadding">
      <Head>
        <title>{`PickN\`Eat | ${t('cart')}`}</title>
      </Head>
      <Heading level={HeadingLevelEnum.One}>CART PAGE</Heading>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
};

export default Cart;
