import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import { pick } from 'lodash';
import styles from './Restaurants.module.css';

// Static components
import PageLayout from 'components/modules/PageLayout';
import Heading from 'components/elements/Heading';
import Location from 'components/modules/Location';
import OpeningTimes from 'components/modules/OpeningTimes';
import MainLayout from 'components/modules/MainLayout';

const Restaurants = () => {
  const t = useTranslations('Navigation');
  const t2 = useTranslations('Restaurants');

  return (
    <MainLayout>
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
    </MainLayout>
  );
};
export default Restaurants;

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
