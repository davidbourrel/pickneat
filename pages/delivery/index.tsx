import { GetStaticPropsContext } from 'next/types';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import styles from './Delivery.module.css';
import { pick } from 'lodash';

// Static components
import PageLayout from 'components/modules/PageLayout';
import Heading from 'components/elements/Heading';
import Link from 'components/elements/Link';
import Button from 'components/elements/buttons/Button';
import MainContentLayout from 'components/modules/MainContentLayout';

const Delivery = () => {
  const t = useTranslations('Delivery');

  return (
    <MainContentLayout>
      <Head>
        <title>{`PickN\`Eat | ${t('delivery')}`}</title>
      </Head>
      <Heading level={1} className={styles.title}>
        {t('deliveryMainTitle')}
      </Heading>
      <div className={styles.mainContent}>
        <section className={styles.deliverySection}>
          <Heading level={2}>{t('delivery')}</Heading>
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
          <Heading level={2}>{t('takeAway')}</Heading>
          <p className={styles.description}>{t('takeAwayContent')}</p>
          <Link href="/" tabIndex={-1}>
            <Button>{t('takeAwayButton')}</Button>
          </Link>
        </section>
      </div>
    </MainContentLayout>
  );
};
export default Delivery;

Delivery.messages = ['Delivery', ...PageLayout.messages];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        await import(`../../messages/${locale}.json`),
        Delivery.messages
      ),
    },
  };
}
