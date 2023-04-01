import { useState, useEffect, PropsWithChildren } from 'react';
import appContext from './app.context';
import { AppContext } from './app.types';
import useKonami from 'hooks/useKonami';
import { getMostVisibleEntry } from 'utils/getMostVisibleEntry';

const { Provider } = appContext;

type AppProviderProps = PropsWithChildren;

export default function AppProvider({ children }: AppProviderProps) {
  const [intersectionObserverEntries, setIntersectionObserverEntries] =
    useState([] as IntersectionObserverEntry[]);

  const [activeMenuCategory, setActiveMenuCategory] = useState(
    null as unknown as string
  );

  useKonami();

  useEffect(() => {
    const activeCategoryEntry = getMostVisibleEntry(
      intersectionObserverEntries
    );

    const activeCategory = activeCategoryEntry?.target?.id;
    setActiveMenuCategory(activeCategory);
  }, [intersectionObserverEntries]);

  const contextValue: AppContext = {
    setIntersectionObserverEntries,
    activeMenuCategory,
  };

  return <Provider value={contextValue}>{children}</Provider>;
}
