import useDarkMode from 'contexts/themeContext/useDarkMode';
import Link from '../Link';
import styles from './Logo.module.css';

interface LogoProps {
  closeMenu: () => void;
}

export default function Logo({ closeMenu }: LogoProps) {
  const { isDarkMode } = useDarkMode();
  return (
    <Link
      href="/"
      className={`${styles.logo} ${isDarkMode ? styles.dark : styles.light}`}
      onClick={closeMenu}
      aria-label="PickN`Eat Logo"
      data-test="mainLogo"
    >
      <span>PickN`Eat</span>
    </Link>
  );
}
