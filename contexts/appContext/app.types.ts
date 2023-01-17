import { Dispatch, SetStateAction } from 'react';

export interface AppContextInterface {
  activeMenuCategory: string;
  setActiveMenuCategory: Dispatch<SetStateAction<string>>;
}
