import { useContext } from 'react';
import { ThemeContext, ThemeDispatchContext } from './contexts';

export const useTheme = () => useContext(ThemeContext);
export const useThemeDispatch = () => useContext(ThemeDispatchContext);
