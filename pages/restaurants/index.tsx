import { FC } from 'react';
import useTranslation from 'hooks/useTranslation';
import Head from 'next/head';
import { useRouter } from 'next/router';
import navigation from 'public/translations/navigation.json';
import restaurantsTrans from 'public/translations/pages/restaurants.json';
import styles from './Restaurants.module.css';
import OpenLayersMap from 'components/modules/OpenLayersMap';
import RestaurantsTable from 'components/modules/RestaurantsTable';

const Restaurants: FC = () => {
  const { locale } = useRouter();

  const navTranslations = useTranslation(navigation, locale);
  const { restaurants } = navTranslations;

  const restaurantsTranslations = useTranslation(restaurantsTrans, locale);
  const { restaurantsMainTitle, location, openingHours } =
    restaurantsTranslations;

  return (
    <main>
      <Head>
        <title>PickN`Eat | {restaurants}</title>
      </Head>
      <h1 className={styles.mainTitle}>{restaurantsMainTitle}</h1>
      <div className={styles.restaurantsContent}>
        <section>
          <h2>{location}</h2>
          <OpenLayersMap />
        </section>
        <section>
          <h2>{openingHours}</h2>
          <RestaurantsTable />
        </section>
      </div>
    </main>
  );
};

export default Restaurants;
