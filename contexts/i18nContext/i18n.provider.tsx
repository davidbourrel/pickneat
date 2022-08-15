import { FC, useMemo, ReactNode, useCallback, useState } from 'react';
import i18nContext from './i18n.context';
import { I18nContextInterface } from './i18n.types';
import { useRouter } from 'next/router';

const { Provider } = i18nContext;

interface I18nProviderProps {
  children: ReactNode;
}

const I18nProvider: FC<I18nProviderProps> = ({ children }) => {
  const { locale } = useRouter();

  const [lang, setLang] = useState(locale ?? 'en');
  const [isLangSwitcherOpened, setIsLangSwitcherOpened] = useState(false);

  const handleLangClick = useCallback((e: MouseEvent) => {
    setLang((e.target as HTMLButtonElement).lang);
    setIsLangSwitcherOpened(false);
  }, []);

  const contextValue: I18nContextInterface = useMemo(
    () => ({
      lang,
      handleLangClick,
      isLangSwitcherOpened,
      setIsLangSwitcherOpened,
    }),
    [lang, handleLangClick, isLangSwitcherOpened, setIsLangSwitcherOpened]
  );

  return <Provider value={contextValue}>{children}</Provider>;
};

export default I18nProvider;
