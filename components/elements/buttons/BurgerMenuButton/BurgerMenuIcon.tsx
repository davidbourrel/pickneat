import { useMemo } from 'react';
import styles from './BurgerMenuButton.module.css';
import { BurgerMenuIconProps } from './types';

export default function BurgerMenuIcon({
  isMobileNavOpened,
}: BurgerMenuIconProps) {
  const bar1ClassName = useMemo(
    () => `${styles.bar} ${styles.bar1}
      ${isMobileNavOpened ? styles.bar1Active : ''}`,
    [isMobileNavOpened]
  );
  const bar2ClassName = useMemo(
    () => `${styles.bar} ${styles.bar2}
      ${isMobileNavOpened ? styles.bar2Active : ''}`,
    [isMobileNavOpened]
  );
  const bar3ClassName = useMemo(
    () => `${styles.bar} ${styles.bar3}
      ${isMobileNavOpened ? styles.bar3Active : ''}`,
    [isMobileNavOpened]
  );

  return (
    <div className={styles.barsContainer}>
      <span className={bar1ClassName} aria-hidden="true" />
      <span className={bar2ClassName} aria-hidden="true" />
      <span className={bar3ClassName} aria-hidden="true" />
    </div>
  );
}
