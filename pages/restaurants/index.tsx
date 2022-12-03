import { FC } from 'react';
import Head from 'next/head';
import Location from 'components/modules/Location';
import OpeningTimes from 'components/modules/OpeningTimes';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import styles from './Restaurants.module.css';
import { useTranslations } from 'next-intl';
import { GetStaticProps } from 'next/types';

const Restaurants: FC = () => {
  const t = useTranslations('Navigation');
  const r = useTranslations('Restaurants');

  return (
    <main className="sidePadding">
      <Head>
        <title>{`PickN\`Eat | ${t('restaurants')}`}</title>
      </Head>
      <Heading level={HeadingLevelEnum.One} className={styles.restaurantsTitle}>
        {r('restaurantsMainTitle')}
      </Heading>
      <div className={styles.restaurantsContent}>
        <section>
          <Heading level={HeadingLevelEnum.Two}>{r('location')}</Heading>
          <Location />
        </section>
        <section>
          <Heading level={HeadingLevelEnum.Two}>{r('openingTimes')}</Heading>
          <OpeningTimes />
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

export default Restaurants;
