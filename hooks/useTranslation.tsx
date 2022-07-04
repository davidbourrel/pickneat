export type TranslationType =
  | string
  | number
  | boolean
  | { [x: string]: TranslationType }
  | Array<TranslationType>;

type useTranslationType = {
  [key: string]: string;
};

const useTranslation = (
  translation: TranslationType,
  locale = 'en'
): useTranslationType => {
  return translation[locale as keyof typeof translation];
};

export default useTranslation;
