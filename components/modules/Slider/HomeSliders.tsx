import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css';

// Static components
import Slider from '.';

// Static images
import burgerImage from 'public/images/home carousel/Photo_by_Douglas_Lopez_on_Unsplash.jpg';
import friesImage from 'public/images/home carousel/Photo_by_Louis_Hansel_on_Unsplash.jpg';
import sodaImage from 'public/images/home carousel/Photo_by_Mahbod_Akhzami_on_Unsplash.jpg';
import dessertImage from 'public/images/home carousel/Photo_by_Zahra_Tavakoli_fard_on_Unsplash.jpg';
import saladImage from 'public/images/home carousel/Photo_by_Ive_Erhard_on_Unsplash.jpg';

const HomeSliders = () => {
  return (
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
  );
};
export default HomeSliders;
