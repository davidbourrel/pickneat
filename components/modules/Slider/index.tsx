import { ReactNode, useMemo } from 'react';
import { Swiper } from 'swiper/react';
import { A11y, Keyboard, Navigation, SwiperOptions } from 'swiper';
import styles from './Slider.module.css';
import Loader from 'components/elements/Loader';

interface SliderProps extends SwiperOptions {
  children: ReactNode;
  loading?: boolean;
}

export default function Slider({ children, loading, ...props }: SliderProps) {
  const computedClassName = useMemo(
    () => (loading ? styles.swiperLoading : styles.swiperContainer),
    [loading]
  );
  return (
    <Swiper
      modules={[Navigation, A11y, Keyboard]}
      slidesPerView={1}
      navigation
      className={computedClassName}
      data-test="sliderContainer"
      {...props}
    >
      {loading ? <Loader /> : children}
    </Swiper>
  );
}
