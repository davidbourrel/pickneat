import { FC, ReactNode, useMemo } from 'react';
import { Swiper } from 'swiper/react';
import { A11y, Keyboard, Navigation, Pagination, SwiperOptions } from 'swiper';
import styles from './Slider.module.css';
import Loader from 'components/elements/Loader';

interface SliderProps extends SwiperOptions {
  children: ReactNode;
  loading?: boolean;
}

const Slider: FC<SliderProps> = ({ children, loading, ...props }) => {
  const computedClassName = useMemo(
    () => (loading ? styles.swiperLoading : styles.swiperContainer),
    [loading]
  );
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Keyboard]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className={computedClassName}
      data-test="sliderContainer"
      {...props}
    >
      {loading ? <Loader /> : children}
    </Swiper>
  );
};

export default Slider;
