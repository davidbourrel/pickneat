import { useMemo, ReactNode, useState, useEffect } from 'react';
import { compareNumbers } from 'utils/compareNumbers';
import appContext from './app.context';
import { AppContextInterface } from './app.types';

const { Provider } = appContext;

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  const [intersectionObserverEntries, setIntersectionObserverEntries] =
    useState([] as IntersectionObserverEntry[]);

  const [activeMenuCategory, setActiveMenuCategory] = useState(
    null as unknown as string
  );

  useEffect(() => {
    const intersectionRatios = intersectionObserverEntries.map(
      (entry: IntersectionObserverEntry) => {
        return entry?.intersectionRatio;
      }
    );
    const mostHighRatioValue = intersectionRatios.sort(compareNumbers).at(-1);

    const entryWithMostHighRatio = intersectionObserverEntries.find((entry) => {
      return entry?.intersectionRatio === mostHighRatioValue;
    });

    setActiveMenuCategory(entryWithMostHighRatio?.target?.id as string);
  }, [intersectionObserverEntries]);

  const contextValue: AppContextInterface = useMemo(
    () => ({
      setIntersectionObserverEntries,
      activeMenuCategory,
    }),
    [setIntersectionObserverEntries, activeMenuCategory]
  );

  return <Provider value={contextValue}>{children}</Provider>;
}
