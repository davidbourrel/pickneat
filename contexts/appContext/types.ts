import { Dispatch, SetStateAction } from 'react';

export interface AppContextValue {
  activeMenuCategory: string;
}
export interface AppDispatchContextValue {
  setIntersectionObserverEntries: Dispatch<
    SetStateAction<IntersectionObserverEntry[]>
  >;
}
