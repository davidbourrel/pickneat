import { FC } from 'react';
import useTranslation from 'hooks/useTranslation';
import Head from 'next/head';
import deliveryTranslations from 'public/translations/pages/delivery.json';
import Button from 'components/elements/buttons/Button';
import Link from 'components/elements/Link';
import styles from './Delivery.module.css';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';

const Delivery: FC = () => {
  const {
    deliveryMainTitle,
    delivery,
    deliveryContent,
    deliveryButton,
    or,
    takeAway,
    takeAwayContent,
    takeAwayButton,
  } = useTranslation(deliveryTranslations);

  return (
    <main className="sidePadding">
      <Head>
        <title>PickN`Eat | {delivery}</title>
      </Head>
      <Heading level={HeadingLevelEnum.One} className={styles.mainTitle}>
        {deliveryMainTitle}
      </Heading>
      <div className={styles.mainContent}>
        <section className={styles.deliverySection}>
          <Heading level={HeadingLevelEnum.Two}>{delivery}</Heading>
          <p className={styles.description}>{deliveryContent}</p>
          <Link
            href="https://deliveroo.fr/fr/"
            target="_blank"
            rel="nofollow"
            tabIndex={-1}
          >
            <Button>{deliveryButton}</Button>
          </Link>
        </section>
        <div className={styles.separation}>
          <span></span>
          <span>{or}</span>
          <span></span>
        </div>
        <section className={styles.takeAwaySection}>
          <Heading level={HeadingLevelEnum.Two}>{takeAway}</Heading>
          <p className={styles.description}>{takeAwayContent}</p>
          <Link href="/" tabIndex={-1}>
            <Button>{takeAwayButton}</Button>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Delivery;
