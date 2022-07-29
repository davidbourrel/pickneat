import { FC, useMemo } from 'react';
import styles from './ThemeSwitcher.module.css';
import Button from '../buttons/Button';
import MoonIcon from 'components/images/icons/MoonIcon';
import useDarkMode from 'contexts/themeContext/useDarkMode';

interface ThemeSwitcherProps {
  title: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ title }) => {
  const { isDarkMode, handleThemeClick } = useDarkMode();

  const svgClassName = useMemo(
    () => (isDarkMode ? styles.dark : styles.light),
    [isDarkMode]
  );

  return (
    <Button
      onClick={handleThemeClick}
      title={title}
      headless
      className={styles.switcherButton}
    >
      <MoonIcon className={svgClassName} />
    </Button>
  );
};

export default ThemeSwitcher;
