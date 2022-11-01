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
import dynamic from 'next/dynamic';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import styles from '../styles/Home.module.css';
import ScrollToTopButton from 'components/elements/ScrollToTopButton';
import ProductsList from 'components/modules/ProductsList';

const Slider = dynamic(() => import('components/modules/Slider'));

const Home: FC = () => {
  const { homeMainTitle } = useTranslation(home);

  return (
    <main>
      <header className={styles.homeHeader}>
        <Slider>
          <SwiperSlide>
            <Image
              layout="responsive"
              placeholder="blur"
              src={burgerImage}
              width="1920"
              height="1280"
              data-test="burgerImage"
              alt="burger"
              quality={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              layout="responsive"
              placeholder="blur"
              src={friesImage}
              width="1920"
              height="1280"
              data-test="friesImage"
              alt="fries"
              quality={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              layout="responsive"
              placeholder="blur"
              src={sodaImage}
              width="1920"
              height="1280"
              data-test="sodaImage"
              alt="soda"
              quality={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              layout="responsive"
              placeholder="blur"
              src={dessertImage}
              width="1920"
              height="1280"
              data-test="dessertImage"
              alt="dessert"
              quality={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              layout="responsive"
              placeholder="blur"
              src={saladImage}
              width="1920"
              height="1280"
              data-test="saladImage"
              alt="salad"
              quality={100}
            />
          </SwiperSlide>
        </Slider>
        <Heading level={HeadingLevelEnum.One}>{homeMainTitle}</Heading>
      </header>
      <ProductsList />

      <section>
        <Heading level={HeadingLevelEnum.Two}>Second section</Heading>
      </section>
      <section>
        <Heading level={HeadingLevelEnum.Two}>Third section</Heading>
      </section>
      <ScrollToTopButton />
    </main>
  );
};

export default Home;
