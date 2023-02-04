import { ClassNameProps } from '_types/components';

export interface BurgerMenuButtonProps extends ClassNameProps {
  onToggleMenu?: () => void;
  onCloseMenu?: () => void;
  isMobileNavOpened: boolean;
  title?: string;
  dataTest: string;
}

export interface BurgerMenuIconProps {
  isMobileNavOpened: boolean;
}
