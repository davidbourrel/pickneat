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

  const getThemePreference = () => {
    if (localStorage.getItem(PICKNEAT_THEME))
      return localStorage.getItem(PICKNEAT_THEME);
    else
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? ThemeEnum.Dark
        : ThemeEnum.Light;
  };

  useEffect(() => {
    const theme = getThemePreference();

    if (theme === ThemeEnum.Dark) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('color-scheme', ThemeEnum.Dark);
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute('color-scheme', ThemeEnum.Light);
    }
  }, []);

  const setThemePreference = useCallback((theme: string) => {
    localStorage.setItem(PICKNEAT_THEME, theme);
    document.documentElement.setAttribute('color-scheme', theme);
  }, []);

  const handleThemeClick = useCallback(() => {
    setIsDarkMode((c) => {
      setThemePreference(!c ? ThemeEnum.Dark : ThemeEnum.Light);
      return !c;
    });
  }, [setThemePreference]);

  const contextValue: ThemeContextInterface = useMemo(
    () => ({
      isDarkMode,
      handleThemeClick,
    }),
    [isDarkMode, handleThemeClick]
  );

  return <Provider value={contextValue}>{children}</Provider>;
}
