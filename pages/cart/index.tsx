import { FC } from 'react';
import Head from 'next/head';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import useTranslation from 'hooks/useTranslation';
import cartTranslations from 'public/translations/pages/cart.json';

const Cart: FC = () => {
  const { cart } = useTranslation(cartTranslations);
  return (
    <main className="sidePadding">
      <Head>
        <title>PickN`Eat | {cart}</title>
      </Head>
      <Heading level={HeadingLevelEnum.One}>CART PAGE</Heading>
    </main>
  );
};

export default Cart;
