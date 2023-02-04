import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { ClassNameProps } from '_types/components';
import styles from './BurgerMenuButton.module.css';
import Button from '../Button';
import BurgerMenuIcon from './BurgerMenuIcon';

interface BurgerMenuButtonProps extends ClassNameProps {
  onToggleMenu?: () => void;
  onCloseMenu?: () => void;
  isMobileNavOpened: boolean;
  title?: string;
  dataTest: string;
}

export default function BurgerMenuButton({
  onToggleMenu,
  onCloseMenu,
  isMobileNavOpened,
  title,
  className,
  dataTest,
}: BurgerMenuButtonProps) {
  const t = useTranslations('Navigation');

  const computedButtonClassName = useMemo(
    () => (className ? `${styles.button} ${className}` : styles.button),
    [className]
  );

  const handleClick = useMemo(
    () => (onCloseMenu ? onCloseMenu : onToggleMenu),
    [onCloseMenu, onToggleMenu]
  );

  const ariaLabel = useMemo(
    () =>
      isMobileNavOpened ? t('closeBurgerMenuTitle') : t('openBurgerMenuTitle'),
    [isMobileNavOpened, t]
  );

  const ariaExpanded = useMemo(
    () => (isMobileNavOpened ? 'true' : 'false'),
    [isMobileNavOpened]
  );

  const computedTitle = useMemo(
    () => !!title && <span className={styles.menuTitle}>{title}</span>,
    [title]
  );

  return (
    <Button
      headless
      className={computedButtonClassName}
      onClick={handleClick}
      title={ariaLabel}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls="mobile-navigation"
      data-test={dataTest}
    >
      {computedTitle}
      <BurgerMenuIcon isMobileNavOpened={isMobileNavOpened} />
    </Button>
  );
}
