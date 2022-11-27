import { FC } from 'react';
import useTranslation from 'hooks/useTranslation';
import Head from 'next/head';
import navigation from 'public/translations/navigation.json';
import restaurantsTrans from 'public/translations/pages/restaurants.json';
import Location from 'components/modules/Location';
import OpeningTimes from 'components/modules/OpeningTimes';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import styles from './Restaurants.module.css';

const Restaurants: FC = () => {
  const { restaurants } = useTranslation(navigation);

  const { restaurantsMainTitle, location, openingTimes } =
    useTranslation(restaurantsTrans);

  return (
    <main className="sidePadding">
      <Head>
        <title>{`PickN\`Eat | ${restaurants}`}</title>
      </Head>
      <Heading level={HeadingLevelEnum.One} className={styles.restaurantsTitle}>
        {restaurantsMainTitle}
      </Heading>
      <div className={styles.restaurantsContent}>
        <section>
          <Heading level={HeadingLevelEnum.Two}>{location}</Heading>
          <Location />
        </section>
        <section>
          <Heading level={HeadingLevelEnum.Two}>{openingTimes}</Heading>
          <OpeningTimes />
        </section>
      </div>
    </main>
  );
};

export default Restaurants;
