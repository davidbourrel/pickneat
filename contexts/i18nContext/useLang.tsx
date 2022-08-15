import { useContext, useMemo } from 'react';
import i18nContext from '.';
import { I18nContextInterface } from './i18n.types';

type UseHandleLangResult = Pick<
  I18nContextInterface,
  'lang' | 'handleLangClick'
>;

const useLang = (): UseHandleLangResult => {
  const { lang, handleLangClick } = useContext(i18nContext);
  return useMemo(() => ({ lang, handleLangClick }), [lang, handleLangClick]);
};

export default useLang;
