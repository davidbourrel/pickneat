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

  const {
    deliveryMainTitle,
    delivery,
    deliveryContent,
    deliveryButton,
    or,
    takeAway,
    takeAwayContent,
    takeAwayButton,
  } = useTranslation(deliveryTranslations, locale);

  return (
    <main className="sidePadding">
      <Head>
        <title>PickN`Eat | {delivery}</title>
      </Head>
      <Headings level={HeadingsLevelEnum.One} className={styles.mainTitle}>
        {deliveryMainTitle}
      </Headings>
      <div className={styles.mainContent}>
        <div className={styles.deliveryBackground}>
          <Headings level={HeadingsLevelEnum.Two}>{delivery}</Headings>
          <p className={styles.description}>{deliveryContent}</p>
          <Link
            href="https://deliveroo.fr/fr/"
            target="_blank"
            rel="nofollow"
            tabIndex={-1}
          >
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
          <p className={styles.description}>{takeAwayContent}</p>
          <Link href="/" tabIndex={-1}>
            <Button>{takeAwayButton}</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Delivery;
