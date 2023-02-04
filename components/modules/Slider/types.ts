import { PropsWithChildren } from 'react';
import { SwiperOptions } from 'swiper';

export interface SliderProps extends SwiperOptions, PropsWithChildren {
  loading?: boolean;
}
