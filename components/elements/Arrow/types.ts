import { ClassNameProps } from '_types/components';

export enum ArrowDirectionEnum {
  Top = 'TOP',
  Bottom = 'BOTTOM',
  Left = 'LEFT',
  Right = 'RIGHT',
}

export interface ArrowProps extends ClassNameProps {
  direction: ArrowDirectionEnum;
  caret?: boolean;
}
