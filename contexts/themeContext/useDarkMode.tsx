import { useContext } from 'react';
import themeContext from '.';
import { ThemeContext } from './theme.types';

type UseHandleSetThemeResult = Pick<
  ThemeContext,
  'isDarkMode' | 'handleThemeClick'
>;

const useDarkMode = (): UseHandleSetThemeResult => {
  const { isDarkMode, handleThemeClick } = useContext(themeContext);

  return { isDarkMode, handleThemeClick };
};

export default useDarkMode;
