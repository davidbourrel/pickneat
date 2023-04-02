import {
  useEffect,
  useState,
  PropsWithChildren,
  createContext,
  useContext,
} from 'react';
import { PICKNEAT_LS_THEME } from '../../_constants/localStorage';
import { ThemeEnum } from '_types/theme';

export const ThemeContext = createContext(true);
export const ThemeDispatchContext = createContext(
  null as unknown as () => void
);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const getThemePreference = () => {
    const themeInLocalStorage = localStorage
      .getItem(PICKNEAT_LS_THEME)
      ?.toString();

    if (themeInLocalStorage) {
      return themeInLocalStorage;
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? ThemeEnum.Dark
        : ThemeEnum.Light;
    }
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

  const setThemePreference = (theme: string) => {
    localStorage.setItem(PICKNEAT_LS_THEME, theme);
    document.documentElement.setAttribute('color-scheme', theme);
  };

  const handleThemeClick = () => {
    setIsDarkMode((c) => {
      setThemePreference(!c ? ThemeEnum.Dark : ThemeEnum.Light);
      return !c;
    });
  };

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <ThemeDispatchContext.Provider value={handleThemeClick}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

// Hooks
export const useDarkMode = () => useContext(ThemeContext);
export const useDarkModeChange = () => useContext(ThemeDispatchContext);
