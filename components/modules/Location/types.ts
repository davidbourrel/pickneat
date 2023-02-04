import { PropsWithChildren } from 'react';

export interface CustomMarkerProps extends PropsWithChildren {
  position: [number, number];
  open: boolean;
}
