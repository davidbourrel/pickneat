import { useState, useEffect, PropsWithChildren } from 'react';
import { AppContext, AppDispatchContext } from './contexts';
import useKonami from 'hooks/useKonami';
import { getMostVisibleEntry } from 'utils/getMostVisibleEntry';
import { AppContextValue, AppDispatchContextValue } from './types';

export const AppProvider = ({ children }: PropsWithChildren) => {
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

  /*****************
   * CONTEXT VALUES
   *****************/
  const contextValue: AppContextValue = { activeMenuCategory };
  const dispatchContextValue: AppDispatchContextValue = {
    setIntersectionObserverEntries,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <AppDispatchContext.Provider value={dispatchContextValue}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};
