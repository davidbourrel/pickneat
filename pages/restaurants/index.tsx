import { GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import { pick } from 'lodash';
import styles from './Restaurants.module.css';

// PageLayout static import to use with next-intl
import PageLayout from 'components/modules/PageLayout';

// Dynamic imports
const Heading = dynamic(() => import('components/elements/Heading'));
const Location = dynamic(() => import('components/modules/Location'));
const OpeningTimes = dynamic(() => import('components/modules/OpeningTimes'));
const MainContentLayout = dynamic(
  () => import('components/modules/MainContentLayout')
);

export default function Restaurants() {
  const t = useTranslations('Navigation');
  const t2 = useTranslations('Restaurants');

  return (
    <MainContentLayout>
      <Head>
        <title>{`PickN\`Eat | ${t('restaurants')}`}</title>
      </Head>
      <Heading level={1} className={styles.restaurantsTitle}>
        {t2('restaurantsMainTitle')}
      </Heading>
      <div className={styles.restaurantsContent}>
        <section>
          <Heading level={2}>{t2('location')}</Heading>
          <Location />
        </section>
        <section>
          <Heading level={2}>{t2('openingTimes')}</Heading>
          <OpeningTimes />
        </section>
      </div>
    </MainContentLayout>
  );
}

Restaurants.messages = ['Navigation', 'Restaurants', ...PageLayout.messages];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        await import(`../../messages/${locale}.json`),
        Restaurants.messages
      ),
    },
  };
}
