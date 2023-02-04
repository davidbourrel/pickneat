import { PropsWithChildren } from 'react';
import { ClassNameProps } from '_types/components';

export interface MainContentLayoutProps
  extends ClassNameProps,
    PropsWithChildren {
  padding?: boolean;
  center?: boolean;
}
