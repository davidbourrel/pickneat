import { PropsWithChildren } from 'react';
import { ClassNameProps } from '_types/components';

export interface MainLayoutProps extends ClassNameProps, PropsWithChildren {
  padding?: boolean;
  center?: boolean;
}
