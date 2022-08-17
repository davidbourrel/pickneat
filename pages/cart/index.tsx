import { FC } from 'react';
import Head from 'next/head';
import Headings from 'components/elements/Headings';
import { HeadingsLevelEnum } from 'components/elements/Headings/types';
import { useRouter } from 'next/router';
import useTranslation from 'hooks/useTranslation';
import cartTranslations from 'public/translations/pages/cart.json';

const Cart: FC = () => {
  const { locale } = useRouter();

  const { cart } = useTranslation(cartTranslations, locale);
  return (
    <main className="sidePadding">
      <Head>
        <title>PickN`Eat | {cart}</title>
      </Head>
      <Headings level={HeadingsLevelEnum.One}>CART PAGE</Headings>
    </main>
  );
};

export default Cart;
