import { FC } from 'react';
import Head from 'next/head';
import Button from 'components/elements/buttons/Button';
import Link from 'components/elements/Link';
import styles from './Delivery.module.css';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import { useTranslations } from 'next-intl';
import { GetStaticProps } from 'next/types';

const Delivery: FC = () => {
  const t = useTranslations('Delivery');

  return (
    <main className="sidePadding">
      <Head>
        <title>{`PickN\`Eat | ${t('delivery')}`}</title>
      </Head>
      <Heading level={HeadingLevelEnum.One} className={styles.mainTitle}>
        {t('deliveryMainTitle')}
      </Heading>
      <div className={styles.mainContent}>
        <section className={styles.deliverySection}>
          <Heading level={HeadingLevelEnum.Two}>{t('delivery')}</Heading>
          <p className={styles.description}>{t('deliveryContent')}</p>
          <Link
            href="https://deliveroo.fr/fr/"
            target="_blank"
            rel="nofollow"
            tabIndex={-1}
          >
            <Button>{t('deliveryButton')}</Button>
          </Link>
        </section>
        <div className={styles.separation}>
          <span></span>
          <span>{t('or')}</span>
          <span></span>
        </div>
        <section className={styles.takeAwaySection}>
          <Heading level={HeadingLevelEnum.Two}>{t('takeAway')}</Heading>
          <p className={styles.description}>{t('takeAwayContent')}</p>
          <Link href="/" tabIndex={-1}>
            <Button>{t('takeAwayButton')}</Button>
          </Link>
        </section>
      </div>
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

export default Delivery;
