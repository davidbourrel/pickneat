import { HTMLProps, ReactNode, useMemo } from 'react';
import { ClassNameComponentProps } from '_types/components';
import Link from '../Link';
import styles from './NavLink.module.css';

interface NavLinkProps
  extends HTMLProps<HTMLAnchorElement>,
    ClassNameComponentProps {
  children: ReactNode;
  href: string;
  isActive: boolean;
  closeMenu?: () => void;
}

export default function NavLink({
  children,
  href,
  isActive,
  closeMenu,
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
    <Link
      href={href}
      onClick={closeMenu}
      className={computedClassName}
      {...rest}
    >
      {children}
    </Link>
  );
}
