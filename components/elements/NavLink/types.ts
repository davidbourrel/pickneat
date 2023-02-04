import { HTMLProps, PropsWithChildren } from 'react';
import { ClassNameProps } from '_types/components';

export interface NavLinkProps
  extends PropsWithChildren,
    HTMLProps<HTMLAnchorElement>,
    ClassNameProps {
  href: string;
  isActive: boolean;
  onCloseMenu?: () => void;
}
