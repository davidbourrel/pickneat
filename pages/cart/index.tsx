import Head from 'next/head';
import Headings from 'components/elements/Headings';
import { HeadingsLevelEnum } from 'components/elements/Headings/types';

const Cart = () => {
  return (
    <main className="sidePadding">
      <Head>
        <title>PickN`Eat | TODO CART</title>
      </Head>
      <Headings level={HeadingsLevelEnum.One}>CART PAGE</Headings>
    </main>
  );
};

export default Cart;
