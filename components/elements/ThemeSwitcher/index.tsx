import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { ThemeEnum } from '_types/theme';
import useDarkMode from 'contexts/themeContext/useDarkMode';
import styles from './ThemeSwitcher.module.css';
import Button from '../buttons/Button';
import MoonIcon from 'components/images/icons/MoonIcon';

interface ThemeSwitcherProps {
  title: string;
  dataTestButton: string;
}

export default function ThemeSwitcher({
  title,
  dataTestButton,
}: ThemeSwitcherProps) {
  const { isDarkMode, handleThemeClick } = useDarkMode();

  const t = useTranslations('Navigation');

  const svgClassName = useMemo(
    () => (isDarkMode ? styles.dark : styles.light),
    [isDarkMode]
  );

  const colorSchemeAttribut = useMemo(
    () => (isDarkMode ? ThemeEnum.Dark : ThemeEnum.Light),
    [isDarkMode]
  );

  const textSwitcher = useMemo(
    () => (isDarkMode ? t('darkModeTheme') : t('lightModeTheme')),
    [isDarkMode, t]
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
