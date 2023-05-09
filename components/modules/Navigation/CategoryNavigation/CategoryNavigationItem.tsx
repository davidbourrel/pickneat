import { memo } from 'react';
import { CategoryNavigationItemProps } from './types';
import styles from './CategoryNavigation.module.css';

// Static Components
import Button from 'components/elements/buttons/Button';
import Link from 'components/elements/Link';

const CategoryNavigationItem = ({
  id,
  isActive,
  children,
}: CategoryNavigationItemProps) => {
  const itemClassName = isActive ? styles.active : '';

  return (
    <li className={itemClassName}>
      <Link href={id} className={styles.link}>
        <Button headless tabIndex={-1}>
          {children}
        </Button>
      </Link>
    </li>
  );
};
export default memo(CategoryNavigationItem);
