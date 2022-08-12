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
      `capitalize ${
        href !== '/profile' && href !== '/cart' && styles.activeLink
      } ${path === href && styles.active}`,
    [href, path]
  );
  return (
    <Link href={href} onClick={closeMenu} className={linkClassName}>
      {children}
    </Link>
  );
};

export default ActiveLink;
