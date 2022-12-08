import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { Product } from '_types/products';
import { pick } from 'lodash';
import { getProducts } from 'database/products';
import styles from '../styles/Home.module.css';

import burgerImage from '../public/images/home carousel/Photo_by_Douglas_Lopez_on_Unsplash.jpg';
import friesImage from '../public/images/home carousel/Photo_by_Louis_Hansel_on_Unsplash.jpg';
import sodaImage from '../public/images/home carousel/Photo_by_Mahbod_Akhzami_on_Unsplash.jpg';
import dessertImage from '../public/images/home carousel/Photo_by_Zahra_Tavakoli_fard_on_Unsplash.jpg';
import saladImage from '../public/images/home carousel/Photo_by_Ive_Erhard_on_Unsplash.jpg';

import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import Slider from 'components/modules/Slider';
import ScrollToTopButton from 'components/elements/ScrollToTopButton';
import CategoryList from 'components/modules/CategoryList';
import PageLayout from 'components/modules/PageLayout';
import ProductCard from 'components/elements/ProductCard';

interface HomeProps {
  ssrProducts: Product[];
}

export default function Home({ ssrProducts }: HomeProps) {
  const t = useTranslations('Home');

  return (
    <main>
      <header className={styles.homeHeader}>
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
              priority
              data-test="sodaImage"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={dessertImage}
              alt="dessert"
              className={styles.sliderImage}
              priority
              data-test="dessertImage"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={saladImage}
              alt="salad"
              className={styles.sliderImage}
              priority
              data-test="saladImage"
            />
          </SwiperSlide>
        </Slider>
        <Heading level={HeadingLevelEnum.One}>{t('homeMainTitle')}</Heading>
      </header>
      <CategoryList ssrProducts={ssrProducts} />
      <ScrollToTopButton />
    </main>
  );
}

Home.messages = ['Home', ...PageLayout.messages, ...ProductCard.messages];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const ssrProducts = getProducts();

  return {
    props: {
      ssrProducts,
      messages: pick(await import(`../messages/${locale}.json`), Home.messages),
    },
  };
}
