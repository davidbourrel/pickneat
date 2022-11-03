import {
  FC,
  useEffect,
  useMemo,
  useCallback,
  useState,
  ReactNode,
} from 'react';
import themeContext from './theme.context';
import { ThemeContextInterface } from './theme.types';
import { PICKANDEAT_THEME } from '../../_constants/localStorage';
import { ThemeEnum } from '_types/theme';

const { Provider } = themeContext;

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSetTheme = useCallback((theme: string) => {
    localStorage.setItem(PICKANDEAT_THEME, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  const handleThemeClick = useCallback(() => {
    setIsDarkMode((c) => {
      handleSetTheme(!c ? ThemeEnum.Dark : ThemeEnum.Light);
      return !c;
    });
  }, [handleSetTheme]);

  /***************
   * Refetch the theme in local storage
   /**************/
  useEffect(() => {
    const refetchTheme = () => {
      if (localStorage.getItem(PICKANDEAT_THEME)) {
        if (localStorage.getItem(PICKANDEAT_THEME) === ThemeEnum.Dark) {
          handleSetTheme(ThemeEnum.Dark);
          setIsDarkMode(true);
        }
        if (localStorage.getItem(PICKANDEAT_THEME) === ThemeEnum.Light) {
          handleSetTheme(ThemeEnum.Light);
          setIsDarkMode(false);
        }
      } else {
        handleSetTheme(ThemeEnum.Light);
        setIsDarkMode(false);
      }
    };
    refetchTheme();

    window.addEventListener('storage', refetchTheme);

    return () => window.removeEventListener('storage', refetchTheme);
  }, [handleSetTheme]);

  const contextValue: ThemeContextInterface = useMemo(
    () => ({
      isDarkMode,
      handleThemeClick,
    }),
    [isDarkMode, handleThemeClick]
  );

  return <Provider value={contextValue}>{children}</Provider>;
};

export default ThemeProvider;
