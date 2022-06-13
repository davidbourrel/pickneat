import { FC } from 'react';
import useTranslation from 'hooks/useTranslation';
import Head from 'next/head';
import { useRouter } from 'next/router';
import deliveryTranslations from 'public/translations/pages/delivery.json';
import Button from 'components/elements/buttons/Button';
import Link from 'components/elements/Link';
import styles from './Delivery.module.css';
import Headings from 'components/elements/Headings';
import { HeadingsLevelEnum } from 'components/elements/Headings/types';

const Delivery: FC = () => {
  const { locale } = useRouter();

  const translations = useTranslation(deliveryTranslations, locale);
  const {
    delivery,
    deliveryContent,
    deliveryButton,
    or,
    takeAway,
    takeAwayContent,
    takeAwayButton,
  } = translations;

  return (
    <main className={`${styles.mainContent} sidePadding`}>
      <Head>
        <title>PickN`Eat | {delivery}</title>
      </Head>
      <div className={styles.deliveryBackground}>
        <Headings level={HeadingsLevelEnum.One}>{delivery}</Headings>
        <p>{deliveryContent}</p>
        <Link href="https://deliveroo.fr/fr/" target="_blank" rel="nofollow">
          <Button>{deliveryButton}</Button>
        </Link>
      </div>
      <div className={styles.separation}>
        <span></span>
        <span>{or}</span>
        <span></span>
      </div>
      <div className={styles.takeAwayBackground}>
        <Headings level={HeadingsLevelEnum.Two}>{takeAway}</Headings>
        <p>{takeAwayContent}</p>
        <Link href="/">
          <Button>{takeAwayButton}</Button>
        </Link>
      </div>
    </main>
  );
};

export default Delivery;
