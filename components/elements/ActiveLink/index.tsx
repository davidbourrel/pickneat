import { HTMLProps, ReactNode, useMemo } from 'react';
import Link from '../Link';
import styles from './ActiveLink.module.css';

interface ActiveLinkProps extends HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  path: string;
  closeMenu?: () => void;
}

export default function ActiveLink({
  children,
  href,
  path,
  closeMenu,
  ...rest
}: ActiveLinkProps) {
  const linkClassName = useMemo(
    () =>
      `capitalize ${
        href !== '/profile' && href !== '/cart' && href !== '/api/auth/login'
          ? styles.activeLink
          : ''
      } ${path === href ? styles.active : ''}`,
    [href, path]
  );

  return (
    <Link href={href} onClick={closeMenu} className={linkClassName} {...rest}>
      {children}
    </Link>
  );
}
