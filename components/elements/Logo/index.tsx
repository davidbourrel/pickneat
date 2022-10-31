import { FC } from 'react';
import Link from '../Link';
import styles from './Logo.module.css';

interface LogoProps {
  closeMenu: () => void;
}

const Logo: FC<LogoProps> = ({ closeMenu }) => {
  return (
    <Link
      href="/"
      className={styles.logo}
      onClick={closeMenu}
      aria-label="PickN`Eat Logo"
      data-test="mainLogo"
    >
      <span>PickN`Eat</span>
    </Link>
  );
};

export default Logo;
