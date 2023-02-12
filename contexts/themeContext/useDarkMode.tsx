import { useContext, useMemo } from 'react';
import themeContext from '.';
import { ThemeContext } from './theme.types';

type UseHandleSetThemeResult = Pick<
  ThemeContext,
  'isDarkMode' | 'handleThemeClick'
>;

const useDarkMode = (): UseHandleSetThemeResult => {
  const { isDarkMode, handleThemeClick } = useContext(themeContext);
  return useMemo(
    () => ({ isDarkMode, handleThemeClick }),
    [isDarkMode, handleThemeClick]
  );
};

export default useDarkMode;
