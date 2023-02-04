import { HTMLProps, ReactNode, useMemo } from 'react';
import { ClassNameProps } from '_types/components';
import Link from '../Link';
import styles from './NavLink.module.css';

interface NavLinkProps extends HTMLProps<HTMLAnchorElement>, ClassNameProps {
  children: ReactNode;
  href: string;
  isActive: boolean;
  onCloseMenu?: () => void;
}

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
