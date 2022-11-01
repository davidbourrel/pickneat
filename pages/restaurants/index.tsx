import { FC } from 'react';
import useTranslation from 'hooks/useTranslation';
import Head from 'next/head';
import navigation from 'public/translations/navigation.json';
import restaurantsTrans from 'public/translations/pages/restaurants.json';
import OpenLayersMap from 'components/modules/OpenLayersMap';
import OpeningHours from 'components/modules/OpeningHours';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import styles from './Restaurants.module.css';

const Restaurants: FC = () => {
  const { restaurants } = useTranslation(navigation);

  const { restaurantsMainTitle, location, openingHours } =
    useTranslation(restaurantsTrans);

  return (
    <main className="sidePadding">
      <Head>
        <title>PickN`Eat | {restaurants}</title>
      </Head>
      <Heading level={HeadingLevelEnum.One} className={styles.restaurantsTitle}>
        {restaurantsMainTitle}
      </Heading>
      <div className={styles.restaurantsContent}>
        <section>
          <Heading level={HeadingLevelEnum.Two}>{location}</Heading>
          <OpenLayersMap />
        </section>
        <section>
          <Heading level={HeadingLevelEnum.Two}>{openingHours}</Heading>
          <OpeningHours />
        </section>
      </div>
    </main>
  );
};

export default Restaurants;
