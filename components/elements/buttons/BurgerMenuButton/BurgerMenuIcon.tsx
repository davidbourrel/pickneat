import styles from './BurgerMenuButton.module.css';
import { BurgerMenuIconProps } from './types';

const BurgerMenuIcon = ({ isMobileNavOpened }: BurgerMenuIconProps) => {
  const bar1ClassName = `${styles.bar} ${styles.bar1}
      ${isMobileNavOpened ? styles.bar1Active : ''}`;
  const bar2ClassName = `${styles.bar} ${styles.bar2}
      ${isMobileNavOpened ? styles.bar2Active : ''}`;
  const bar3ClassName = `${styles.bar} ${styles.bar3}
      ${isMobileNavOpened ? styles.bar3Active : ''}`;

  return (
    <div className={styles.barsContainer}>
      <span className={bar1ClassName} aria-hidden="true" />
      <span className={bar2ClassName} aria-hidden="true" />
      <span className={bar3ClassName} aria-hidden="true" />
    </div>
  );
};
export default BurgerMenuIcon;
