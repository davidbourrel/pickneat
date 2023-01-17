import { GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { Product } from '_types/products';
import { pick } from 'lodash';
import { getProducts } from 'database/products';
import styles from '../styles/Home.module.css';

// Static images
import burgerImage from '../public/images/home carousel/Photo_by_Douglas_Lopez_on_Unsplash.jpg';
import friesImage from '../public/images/home carousel/Photo_by_Louis_Hansel_on_Unsplash.jpg';
import sodaImage from '../public/images/home carousel/Photo_by_Mahbod_Akhzami_on_Unsplash.jpg';
import dessertImage from '../public/images/home carousel/Photo_by_Zahra_Tavakoli_fard_on_Unsplash.jpg';
import saladImage from '../public/images/home carousel/Photo_by_Ive_Erhard_on_Unsplash.jpg';

// Static Components
import PageLayout from 'components/modules/PageLayout';
import Slider from 'components/modules/Slider';
import Heading from 'components/elements/Heading';
import MainContentLayout from 'components/modules/MainContentLayout';
import CategoryNavigation from 'components/modules/Navigation/CategoryNavigation';
import MenuCategories from 'components/modules/MenuCategories';

// Dynamic Components
const ViewCartButton = dynamic(
  () => import('components/elements/buttons/ViewCartButton')
);
const ScrollToTopButton = dynamic(
  () => import('components/elements/buttons/ScrollToTopButton')
);

interface HomeProps {
  ssrProducts: Product[];
}

export default function Home({ ssrProducts }: HomeProps) {
  const t = useTranslations('Home');

  return (
    <MainContentLayout padding={false}>
      <CategoryNavigation />
      <header>
        <Slider>
          <SwiperSlide>
            <Image
              src={burgerImage}
              alt="burger"
              className={styles.sliderImage}
              priority
              data-test="burgerImage"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={friesImage}
              alt="fries"
              className={styles.sliderImage}
              priority
              data-test="friesImage"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={sodaImage}
              alt="soda"
              className={styles.sliderImage}
              data-test="sodaImage"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={dessertImage}
              alt="dessert"
              className={styles.sliderImage}
              data-test="dessertImage"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={saladImage}
              alt="salad"
              className={styles.sliderImage}
              data-test="saladImage"
            />
          </SwiperSlide>
        </Slider>
        <Heading level={1} className={styles.mainTitle}>
          {t('homeMainTitle')}
        </Heading>
      </header>
      <MenuCategories ssrProducts={ssrProducts} className="appPadding" />
      <ViewCartButton />
      <ScrollToTopButton />
    </MainContentLayout>
  );
}

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
