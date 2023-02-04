import { useMemo, useState, useEffect, PropsWithChildren } from 'react';
import appContext from './app.context';
import { AppContextInterface } from './app.types';

const { Provider } = appContext;

type AppProviderProps = PropsWithChildren;

export default function AppProvider({ children }: AppProviderProps) {
  const [intersectionObserverEntries, setIntersectionObserverEntries] =
    useState([] as IntersectionObserverEntry[]);

  const [activeMenuCategory, setActiveMenuCategory] = useState(
    null as unknown as string
  );

  useEffect(() => {
    const activeCategoryEntry = intersectionObserverEntries?.reduce(
      (
        mostHigherRatioEntry: IntersectionObserverEntry,
        entry: IntersectionObserverEntry
      ) => {
        const entryIntersectionRatio = entry?.intersectionRatio;
        const higherIntersectionRatio =
          mostHigherRatioEntry?.intersectionRatio ?? 0;

        if (entryIntersectionRatio >= higherIntersectionRatio) {
          return (mostHigherRatioEntry = entry);
        }

        return mostHigherRatioEntry;
      },
      {} as IntersectionObserverEntry
    );

    const activeCategory = activeCategoryEntry?.target?.id;
    setActiveMenuCategory(activeCategory);
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
