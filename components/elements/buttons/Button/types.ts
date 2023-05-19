import { HTMLProps, PropsWithChildren } from 'react';

export interface ButtonProps
  extends PropsWithChildren,
    HTMLProps<HTMLButtonElement> {
  absoluteLoader?: boolean;
  border?: boolean;
  busy?: boolean;
  busyClassName?: string;
  disabledClassName?: string;
  headless?: boolean;
  hideBusyWheel?: boolean;
  onDisabledClick?: React.HTMLProps<HTMLButtonElement>['onClick'];
}
