import { FC } from 'react';
import { useRouter } from 'next/router';
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
import Headings from 'components/elements/Headings';
import { HeadingsLevelEnum } from 'components/elements/Headings/types';
import styles from '../styles/Home.module.css';

const Slider = dynamic(() => import('components/modules/Slider'));

const Home: FC = () => {
  const { locale } = useRouter();

  const { homeMainTitle } = useTranslation(home, locale);

  return (
    <main className={styles.main}>
      <section>
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
        <Headings level={HeadingsLevelEnum.One}>{homeMainTitle}</Headings>
      </section>
      <section>Second section</section>
      <section>Third section</section>
    </main>
  );
};

export default Home;
