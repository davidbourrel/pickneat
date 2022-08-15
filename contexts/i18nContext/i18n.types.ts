import { Dispatch, SetStateAction } from 'react';

export interface I18nContextInterface {
  lang: string;
  handleLangClick: (e: MouseEvent) => void;
  isLangSwitcherOpened: boolean;
  setIsLangSwitcherOpened: Dispatch<SetStateAction<boolean>>;
}
