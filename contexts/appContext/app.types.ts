import { Dispatch, SetStateAction } from 'react';

export interface AppContextInterface {
  setIntersectionObserverEntries: Dispatch<
    SetStateAction<IntersectionObserverEntry[]>
  >;
  activeMenuCategory: string;
}
