import { Swiper } from 'swiper/react';
import { A11y, Keyboard, Navigation } from 'swiper';
import styles from './Slider.module.css';
import { SliderProps } from './types';

// Static components
import Loader from 'components/elements/Loader';

const Slider = ({ children, loading, ...props }: SliderProps) => {
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
};
export default Slider;
