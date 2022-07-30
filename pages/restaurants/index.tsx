import { FC } from 'react';
import useTranslation from 'hooks/useTranslation';
import Head from 'next/head';
import { useRouter } from 'next/router';
import navigation from 'public/translations/navigation.json';
import restaurantsTrans from 'public/translations/pages/restaurants.json';
import OpenLayersMap from 'components/modules/OpenLayersMap';
import OpeningHours from 'components/modules/OpeningHours';
import Headings from 'components/elements/Headings';
import { HeadingsLevelEnum } from 'components/elements/Headings/types';
import styles from './Restaurants.module.css';

const Restaurants: FC = () => {
  const { locale } = useRouter();

  const { restaurants } = useTranslation(navigation, locale);

  const { restaurantsMainTitle, location, openingHours } = useTranslation(
    restaurantsTrans,
    locale
  );

  return (
    <main className="sidePadding">
      <Head>
        <title>PickN`Eat | {restaurants}</title>
      </Head>
      <Headings
        level={HeadingsLevelEnum.One}
        className={styles.restaurantsTitle}
      >
        {restaurantsMainTitle}
      </Headings>
      <div className={styles.restaurantsContent}>
        <section>
          <Headings level={HeadingsLevelEnum.Two}>{location}</Headings>
          <OpenLayersMap />
        </section>
        <section>
          <Headings level={HeadingsLevelEnum.Two}>{openingHours}</Headings>
          <OpeningHours />
        </section>
      </div>
    </main>
  );
};

export default Restaurants;
