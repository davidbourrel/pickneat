import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import useTranslation from 'hooks/useTranslation';
import home from 'public/translations/pages/home.json';
import Image from 'next/image';
import burgerImage from '../public/images/home carousel/Photo_by_Douglas_Lopez_on_Unsplash.jpg';
import friesImage from '../public/images/home carousel/Photo_by_Louis_Hansel_on_Unsplash.jpg';
import sodaImage from '../public/images/home carousel/Photo_by_Mahbod_Akhzami_on_Unsplash.jpg';
import dessertImage from '../public/images/home carousel/Photo_by_Zahra_Tavakoli_fard_on_Unsplash.jpg';
import saladImage from '../public/images/home carousel/Photo_by_Ive_Erhard_on_Unsplash.jpg';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import styles from '../styles/Home.module.css';
import Slider from 'components/modules/Slider';
import ScrollToTopButton from 'components/elements/ScrollToTopButton';
import CategoryList from 'components/modules/CategoryList';
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
        <Heading level={HeadingLevelEnum.One}>{homeMainTitle}</Heading>
      </header>
      <CategoryList ssrProducts={ssrProducts} />
      <ScrollToTopButton />
    </main>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  const ssrProducts = await res.json();

  return {
    props: { ssrProducts },
  };
};

export default Home;
