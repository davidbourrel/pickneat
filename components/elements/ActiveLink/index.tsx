import { FC, ReactNode, useMemo } from 'react';
import Link from '../Link';
import styles from './ActiveLink.module.css';

interface ActiveLinkProps {
  children: ReactNode;
  path: string;
  href: string;
  closeMenu?: () => void;
}

const ActiveLink: FC<ActiveLinkProps> = ({
  children,
  path,
  href,
  closeMenu,
}) => {
  const linkClassName = useMemo(
    () =>
      `capitalize ${styles.activeLink} ${
        path === href && path !== '/profile' ? styles.active : ''
      }`,
    [href, path]
  );
  return (
    <Link href={href} onClick={closeMenu} className={linkClassName}>
      {children}
    </Link>
  );
};

export default ActiveLink;
