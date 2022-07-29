import { useContext, useMemo } from 'react';
import themeContext from '.';
import { ThemeContextInterface } from './theme.types';

type UseHandleSetThemeResult = Pick<
  ThemeContextInterface,
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
