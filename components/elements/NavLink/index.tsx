import { useMemo } from 'react';
import Link from '../Link';
import styles from './NavLink.module.css';
import { NavLinkProps } from './types';

export default function NavLink({
  children,
  href,
  isActive,
  onCloseMenu,
  className = '',
  ...rest
}: NavLinkProps) {
  const computedClassName = useMemo(
    () =>
      `capitalize ${styles.navLink} ${
        isActive ? styles.active : ''
      } ${className}`,
    [isActive, className]
  );

  return (
    <Link href={href} onClick={onCloseMenu} {...rest}>
      <div className={computedClassName}>{children}</div>
    </Link>
  );
}
