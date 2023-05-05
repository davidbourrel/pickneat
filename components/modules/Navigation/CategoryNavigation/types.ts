import { PropsWithChildren } from 'react';

export interface CategoryNavigationProps {
  intersectionObserverEntries: IntersectionObserverEntry[];
}
export interface CategoryNavigationItemProps extends PropsWithChildren {
  id: string;
  isActive: boolean;
}
