import { FC, useMemo } from 'react';
import Button from '../Button';
import styles from './BurgerMenuToggle.module.css';

interface BurgerToggleButtonProps {
  handleToggleMenu: () => void;
  isSideNavOpened: boolean;
}

const BurgerMenuToggle: FC<BurgerToggleButtonProps> = ({
  handleToggleMenu,
  isSideNavOpened,
}) => {
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
      className={styles.button}
      onClick={handleToggleMenu}
      aria-label="Open the menu"
      aria-expanded={ariaExpanded}
      aria-controls="side-navigation"
      title="Open the menu"
      data-test="burgerToggleButton"
    >
      <span className={styles.menuTitle}>MENU</span>
      <div className={styles.barsContainer}>
        <span className={bar1ClassName} aria-hidden="true" />
        <span className={bar2ClassName} aria-hidden="true" />
        <span className={bar3ClassName} aria-hidden="true" />
      </div>
    </Button>
  );
};

export default BurgerMenuToggle;
