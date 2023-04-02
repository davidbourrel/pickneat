import {
  useState,
  useEffect,
  PropsWithChildren,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import useKonami from 'hooks/useKonami';
import { getMostVisibleEntry } from 'utils/getMostVisibleEntry';

export const AppContext = createContext(null as unknown as string);
export const AppDispatchContext = createContext(
  null as unknown as Dispatch<SetStateAction<IntersectionObserverEntry[]>>
);

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

  return (
    <AppContext.Provider value={activeMenuCategory}>
      <AppDispatchContext.Provider value={setIntersectionObserverEntries}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};
