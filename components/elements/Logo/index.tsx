import { useMemo } from 'react';
import styles from './Logo.module.css';
import useDarkMode from 'contexts/themeContext/useDarkMode';
import { ClassNameComponentProps } from '_types/components';
import Link from '../Link';

interface LogoProps extends ClassNameComponentProps {
  closeMenu?: () => void;
}

export default function Logo({ closeMenu, className = '' }: LogoProps) {
  const { isDarkMode } = useDarkMode();

  const computedClassName = useMemo(
    () =>
      `${className} ${styles.logo} ${isDarkMode ? styles.dark : styles.light}`,
    [isDarkMode, className]
  );

  return (
    <Link
      href="/"
      className={computedClassName}
      onClick={closeMenu}
      aria-label="PickN`Eat Logo"
      data-test="mainLogo"
    >
      <span>PickN`Eat</span>
    </Link>
  );
}
