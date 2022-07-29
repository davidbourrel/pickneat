import { createContext } from 'react';
import { INITIAL_THEME_CONTEXT } from './theme.const';

const themeContext = createContext(INITIAL_THEME_CONTEXT);

export default themeContext;
