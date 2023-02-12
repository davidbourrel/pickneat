import { Dispatch, SetStateAction } from 'react';

export interface AppContext {
  setIntersectionObserverEntries: Dispatch<
    SetStateAction<IntersectionObserverEntry[]>
  >;
  activeMenuCategory: string;
}
