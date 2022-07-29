import {
  FC,
  useEffect,
  useMemo,
  ReactNode,
  useCallback,
  useState,
} from 'react';
import themeContext from './theme.context';
import { ThemeContextInterface } from './theme.types';
import { PICKANDEAT_THEME } from '../../_constants/localStorage';

const { Provider } = themeContext;

export enum ThemeEnum {
  Light = 'light',
  Dark = 'dark',
}

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
        }
        if (localStorage.getItem(PICKANDEAT_THEME) === ThemeEnum.Light) {
          handleSetTheme(ThemeEnum.Light);
        }
      } else {
        handleSetTheme(ThemeEnum.Light);
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
