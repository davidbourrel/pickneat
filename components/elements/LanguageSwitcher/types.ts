export interface LanguageSwitcherProps {
  title: string;
  ariaControlsId: string;
  dataTestButton: string;
  dataTestLangList: string;
  dataTestLangButton: string;
}

export interface LangItemProps {
  lang: string;
  incomingLocale: string;
}
