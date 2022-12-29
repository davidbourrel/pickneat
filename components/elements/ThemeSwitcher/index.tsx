import { useMemo } from 'react';
import styles from './ThemeSwitcher.module.css';
import Button from '../buttons/Button';
import MoonIcon from 'components/images/icons/MoonIcon';
import useDarkMode from 'contexts/themeContext/useDarkMode';
import { ThemeEnum } from '_types/theme';

interface ThemeSwitcherProps {
  title: string;
  dataTestButton: string;
}

export default function ThemeSwitcher({
  title,
  dataTestButton,
}: ThemeSwitcherProps) {
  const { isDarkMode, handleThemeClick } = useDarkMode();

  const svgClassName = useMemo(
    () => (isDarkMode ? styles.dark : styles.light),
    [isDarkMode]
  );

  const colorSchemeAttribut = useMemo(
    () => (isDarkMode ? ThemeEnum.Dark : ThemeEnum.Light),
    [isDarkMode]
  );

  const textSwitcher = useMemo(
    () => (isDarkMode ? 'DAYMODE' : 'NIGHTMODE'),
    [isDarkMode]
  );

  return (
    <Button
      onClick={handleThemeClick}
      title={title}
      headless
      className={styles.switcherButton}
      color-scheme-attribut={colorSchemeAttribut}
      data-test={dataTestButton}
    >
      <MoonIcon className={svgClassName} />
      <span>{textSwitcher}</span>
    </Button>
  );
}
