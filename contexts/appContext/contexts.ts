import { createContext } from 'react';
import { AppContextValue, AppDispatchContextValue } from './types';

export const AppContext = createContext(null as unknown as AppContextValue);
export const AppDispatchContext = createContext(
  null as unknown as AppDispatchContextValue
);
