import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { ClassNameComponentProps } from '_types/components';
import styles from './BurgerMenuButton.module.css';
import Button from '../Button';
import BurgerMenuIcon from './BurgerMenuIcon';

interface BurgerMenuButtonProps extends ClassNameComponentProps {
  handleToggleMenu?: () => void;
  closeMenu?: () => void;
  isMobileNavOpened: boolean;
  title?: string;
  dataTest: string;
}

export default function BurgerMenuButton({
  handleToggleMenu,
  closeMenu,
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

  const computedClickEvent = useMemo(
    () => (closeMenu ? closeMenu : handleToggleMenu),
    [closeMenu, handleToggleMenu]
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
      onClick={computedClickEvent}
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
