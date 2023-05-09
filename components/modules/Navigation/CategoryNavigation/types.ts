import { PropsWithChildren } from 'react';

export interface CategoryNavigationItemProps extends PropsWithChildren {
  id: string;
  isActive: boolean;
}
