import styles from './NavLink.module.css';
import { NavLinkProps } from './types';

// Static components
import Link from '../Link';

const NavLink = ({
  children,
  href,
  isActive,
  onCloseMenu,
  className = '',
  ...rest
}: NavLinkProps) => {
  const computedClassName = `capitalize ${styles.navLink} ${
    isActive ? styles.active : ''
  } ${className}`;

  return (
    <Link href={href} onClick={onCloseMenu} {...rest}>
      <div className={computedClassName}>{children}</div>
    </Link>
  );
};
export default NavLink;
