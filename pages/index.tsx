import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import useTranslation from 'hooks/useTranslation';
import home from 'public/translations/pages/home.json';
import Image from 'next/image';
import burgerImage from 'public/images/home carousel/Photo_by_Douglas_Lopez_on_Unsplash.jpg';
import friesImage from 'public/images/home carousel/Photo_by_Louis_Hansel_on_Unsplash.jpg';
import sodaImage from 'public/images/home carousel/Photo_by_Mahbod_Akhzami_on_Unsplash.jpg';
import dessertImage from 'public/images/home carousel/Photo_by_Zahra_Tavakoli_fard_on_Unsplash.jpg';
import saladImage from 'public/images/home carousel/Photo_by_Ive_Erhard_on_Unsplash.jpg';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import styles from '../styles/Home.module.css';
import Slider from 'components/modules/Slider';
import ScrollToTopButton from 'components/elements/ScrollToTopButton';
import CategoryList from 'components/modules/CategoryList';
import { getProductsFromAPI } from 'database/getProductsFromAPI';
import { Products } from '_types/products';

interface HomeProps {
  ssrProducts: Products[];
}

const Home: FC<HomeProps> = ({ ssrProducts }) => {
  const { homeMainTitle } = useTranslation(home);

  return (
    <main>
      <header className={styles.homeHeader}>
        <Slider>
          <SwiperSlide>
            <Image
              src={burgerImage}
              alt="burger"
              layout="responsive"
              width="1920"
              height="1280"
              placeholder="blur"
              data-test="burgerImage"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={friesImage}
              alt="fries"
              layout="responsive"
              width="1920"
              height="1280"
              placeholder="blur"
              data-test="friesImage"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={sodaImage}
              alt="soda"
              layout="responsive"
              width="1920"
              height="1280"
              placeholder="blur"
              data-test="sodaImage"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={dessertImage}
              alt="dessert"
              layout="responsive"
              width="1920"
              height="1280"
              placeholder="blur"
              data-test="dessertImage"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={saladImage}
              alt="salad"
              layout="responsive"
              width="1920"
              height="1280"
              placeholder="blur"
              data-test="saladImage"
            />
          </SwiperSlide>
        </Slider>
        <Heading level={HeadingLevelEnum.One}>{homeMainTitle}</Heading>
      </header>
      <CategoryList ssrProducts={ssrProducts} />
      <ScrollToTopButton />
    </main>
  );
};

export const getStaticProps = async () => {
  const products = await getProductsFromAPI();

  return {
    props: { ssrProducts: products.products },
  };
};

export default Home;
