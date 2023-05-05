import { useState } from 'react';
import { GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { pick } from 'lodash';
import { getProducts } from 'database/products';
import styles from '../styles/Home.module.css';
import HomeProps from '_types/app';

// Static Components
import PageLayout from 'components/modules/PageLayout';
import Heading from 'components/elements/Heading';
import MainLayout from 'components/modules/MainLayout';
import CategoryNavigation from 'components/modules/Navigation/CategoryNavigation';
import MenuCategories from 'components/modules/MenuCategories';
import HomeSliders from 'components/modules/Slider/HomeSliders';

// Dynamic Components
const ViewCartButton = dynamic(
  () => import('components/elements/buttons/ViewCartButton')
);
const ScrollToTopButton = dynamic(
  () => import('components/elements/buttons/ScrollToTopButton')
);

const Home = ({ ssrProducts }: HomeProps) => {
  const [intersectionObserverEntries, setIntersectionObserverEntries] =
    useState([] as IntersectionObserverEntry[]);

  const t = useTranslations('Home');

  return (
    <MainLayout padding={false}>
      <CategoryNavigation
        intersectionObserverEntries={intersectionObserverEntries}
      />
      <HomeSliders />
      <Heading level={1} className={styles.mainTitle}>
        {t('homeMainTitle')}
      </Heading>
      <MenuCategories
        ssrProducts={ssrProducts}
        setIntersectionObserverEntries={setIntersectionObserverEntries}
        className="appPadding"
      />
      <ViewCartButton />
      <ScrollToTopButton />
    </MainLayout>
  );
};
export default Home;

Home.messages = ['Home', 'Product', 'Cart', ...PageLayout.messages];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const ssrProducts = getProducts();

  return {
    props: {
      ssrProducts,
      messages: pick(await import(`../messages/${locale}.json`), Home.messages),
    },
  };
}
