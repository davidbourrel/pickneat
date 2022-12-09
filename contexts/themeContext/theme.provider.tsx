import { useEffect, useMemo, useCallback, useState, ReactNode } from 'react';
import themeContext from './theme.context';
import { ThemeContextInterface } from './theme.types';
import { PICKNEAT_THEME } from '../../_constants/localStorage';
import { ThemeEnum } from '_types/theme';

const { Provider } = themeContext;

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSetTheme = useCallback((theme: string) => {
    localStorage.setItem(PICKNEAT_THEME, theme);
    document.documentElement.setAttribute('color-scheme', theme);
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
      if (localStorage.getItem(PICKNEAT_THEME)) {
        if (localStorage.getItem(PICKNEAT_THEME) === ThemeEnum.Dark) {
          handleSetTheme(ThemeEnum.Dark);
          setIsDarkMode(true);
        }
        if (localStorage.getItem(PICKNEAT_THEME) === ThemeEnum.Light) {
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
}
