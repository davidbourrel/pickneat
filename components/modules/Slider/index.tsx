import { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { A11y, Keyboard, Navigation, SwiperOptions } from 'swiper';
import styles from './Slider.module.css';
import Loader from 'components/elements/Loader';

interface SliderProps extends SwiperOptions {
  children: ReactNode;
  loading?: boolean;
}

export default function Slider({ children, loading, ...props }: SliderProps) {
  return (
    <Swiper
      modules={[Navigation, A11y, Keyboard]}
      slidesPerView={1}
      navigation
      className={styles.swiperContainer}
      data-test="sliderContainer"
      {...props}
    >
      {loading ? <Loader absoluteLoader /> : children}
    </Swiper>
  );
}
