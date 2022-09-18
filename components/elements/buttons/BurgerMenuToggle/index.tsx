import { FC, useMemo } from 'react';
import useTranslation from 'hooks/useTranslation';
import { useRouter } from 'next/router';
import { ClassNameComponentProps } from '_types/components';
import Button from '../Button';
import styles from './BurgerMenuToggle.module.css';
import navigation from 'public/translations/navigation.json';

interface BurgerToggleButtonProps extends ClassNameComponentProps {
  handleToggleMenu?: () => void;
  closeMenu?: () => void;
  isSideNavOpened: boolean;
  title?: string;
}

const BurgerMenuToggle: FC<BurgerToggleButtonProps> = ({
  handleToggleMenu,
  closeMenu,
  isSideNavOpened,
  title,
  className,
}) => {
  const { locale } = useRouter();
  const { burgerMenuOpenTitle, burgerMenuCloseTitle } = useTranslation(
    navigation,
    locale
  );

  const computedButtonClassName = useMemo(
    () => (className ? `${styles.button} ${className}` : styles.button),
    [className]
  );

  const computedTitle = useMemo(
    () => (title ? <span className={styles.menuTitle}>{title}</span> : null),
    [title]
  );

  const computedClickEvent = useMemo(
    () => (closeMenu ? closeMenu : handleToggleMenu),
    [closeMenu, handleToggleMenu]
  );

  const ariaLabel = useMemo(
    () => (isSideNavOpened ? burgerMenuCloseTitle : burgerMenuOpenTitle),
    [isSideNavOpened, locale]
  );

  const ariaExpanded = useMemo(
    () => (isSideNavOpened ? 'true' : 'false'),
    [isSideNavOpened]
  );

  const bar1ClassName = useMemo(
    () => `${styles.bar} ${styles.bar1}
      ${isSideNavOpened && styles.bar1Active}`,
    [isSideNavOpened]
  );
  const bar2ClassName = useMemo(
    () => `${styles.bar} ${styles.bar2}
      ${isSideNavOpened && styles.bar2Active}`,
    [isSideNavOpened]
  );
  const bar3ClassName = useMemo(
    () => `${styles.bar} ${styles.bar3}
      ${isSideNavOpened && styles.bar3Active}`,
    [isSideNavOpened]
  );

  return (
    <Button
      headless
      className={computedButtonClassName}
      onClick={computedClickEvent}
      title={ariaLabel}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls="side-navigation"
      data-test="burgerToggleButton"
    >
      {computedTitle}
      <div className={styles.barsContainer}>
        <span className={bar1ClassName} aria-hidden="true" />
        <span className={bar2ClassName} aria-hidden="true" />
        <span className={bar3ClassName} aria-hidden="true" />
      </div>
    </Button>
  );
};

export default BurgerMenuToggle;
