import { useMemo, ReactNode, useState } from 'react';
import appContext from './app.context';
import { AppContextInterface } from './app.types';

const { Provider } = appContext;

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  const [activeMenuCategory, setActiveMenuCategory] = useState(
    null as unknown as string
  );

  const contextValue: AppContextInterface = useMemo(
    () => ({
      activeMenuCategory,
      setActiveMenuCategory,
    }),
    [activeMenuCategory, setActiveMenuCategory]
  );

  return <Provider value={contextValue}>{children}</Provider>;
}
