import { FC, HTMLProps, PropsWithChildren, useMemo } from 'react';
import Link from '../Link';
import styles from './ActiveLink.module.css';

interface ActiveLinkProps
  extends HTMLProps<HTMLAnchorElement>,
    PropsWithChildren {
  href: string;
  path: string;
  closeMenu?: () => void;
}

const ActiveLink: FC<ActiveLinkProps> = ({
  children,
  href,
  path,
  closeMenu,
  ...rest
}) => {
  const linkClassName = useMemo(
    () =>
      `capitalize ${
        href !== '/profile' &&
        href !== '/cart' &&
        href !== '/api/auth/login' &&
        styles.activeLink
      } ${path === href && styles.active}`,
    [href, path]
  );

  return (
    <Link href={href} onClick={closeMenu} className={linkClassName} {...rest}>
      {children}
    </Link>
  );
};

export default ActiveLink;
