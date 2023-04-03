import { createContext } from 'react';
import { ThemeContextValue, ThemeDispatchContextValue } from './types';

export const ThemeContext = createContext(true as unknown as ThemeContextValue);
export const ThemeDispatchContext = createContext(
  null as unknown as ThemeDispatchContextValue
);
