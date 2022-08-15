import { useContext, useMemo } from 'react';
import i18nContext from '.';
import { I18nContextInterface } from './i18n.types';

type UseHandleLangPopupResult = Pick<
  I18nContextInterface,
  'isLangSwitcherOpened' | 'setIsLangSwitcherOpened'
>;

const useLangPopup = (): UseHandleLangPopupResult => {
  const { isLangSwitcherOpened, setIsLangSwitcherOpened } =
    useContext(i18nContext);
  return useMemo(
    () => ({ isLangSwitcherOpened, setIsLangSwitcherOpened }),
    [isLangSwitcherOpened, setIsLangSwitcherOpened]
  );
};

export default useLangPopup;
