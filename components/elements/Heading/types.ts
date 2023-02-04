import { HTMLProps, PropsWithChildren } from 'react';

export interface HeadingProps
  extends PropsWithChildren,
    HTMLProps<HTMLHeadingElement> {
  level: number;
  error?: boolean;
}
