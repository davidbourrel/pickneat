import styles from './Logo.module.css';
import useDarkMode from 'contexts/themeContext/useDarkMode';
import { LogoProps } from './types';

// Static components
import Link from '../Link';

const Logo = ({ onCloseMenu, className = '' }: LogoProps) => {
  const { isDarkMode } = useDarkMode();

  const computedClassName = `${className} ${styles.logo} ${
    isDarkMode ? styles.dark : styles.light
  }`;

  return (
    <Link
      href="/"
      className={computedClassName}
      onClick={onCloseMenu}
      aria-label="PickN`Eat Logo"
      data-test="mainLogo"
    >
      <span>PickN`Eat</span>
    </Link>
  );
};
export default Logo;
