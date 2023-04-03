import styles from './Logo.module.css';
import { LogoProps } from './types';
import { useTheme } from 'contexts/themeContext/hooks';

// Static components
import Link from '../Link';

const Logo = ({ onCloseMenu, className = '' }: LogoProps) => {
  const { isDarkMode } = useTheme();

  const computedClassName = `${className} ${styles.logo} ${
    isDarkMode ? styles.dark : styles.light
  }`;

  return (
    <Link
      href="/"
      className={computedClassName}
      onClick={onCloseMenu}
      aria-label="PickN`Eat Logo"
      data-test="mainLogo">
      <span>PickN`Eat</span>
    </Link>
  );
};
export default Logo;
