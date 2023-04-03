import { useTranslations } from 'next-intl';
import { ThemeEnum } from '_types/theme';
import { ThemeSwitcherProps } from './types';
import styles from './ThemeSwitcher.module.css';
import { useTheme, useThemeDispatch } from 'contexts/themeContext/hooks';

// Static components
import Button from '../buttons/Button';
import MoonIcon from 'components/images/icons/MoonIcon';

const ThemeSwitcher = ({ title, dataTestButton }: ThemeSwitcherProps) => {
  const { handleThemeClick } = useThemeDispatch();
  const { isDarkMode } = useTheme();

  const t = useTranslations('Navigation');

  const svgClassName = isDarkMode ? styles.dark : styles.light;

  const colorSchemeAttribut = isDarkMode ? ThemeEnum.Dark : ThemeEnum.Light;

  const textTranslated = isDarkMode ? t('darkModeTheme') : t('lightModeTheme');

  return (
    <Button
      onClick={handleThemeClick}
      title={title}
      headless
      className={styles.switcherButton}
      color-scheme-attribut={colorSchemeAttribut}
      data-test={dataTestButton}>
      <MoonIcon className={svgClassName} />
      <span>{textTranslated}</span>
    </Button>
  );
};
export default ThemeSwitcher;
