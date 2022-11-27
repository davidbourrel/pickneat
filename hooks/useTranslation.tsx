import { useRouter } from 'next/router';
import { LangEnum } from '_types/lang';

export type TranslationType =
  | string
  | number
  | boolean
  | { [x: string]: TranslationType }
  | Array<TranslationType>;

type useTranslationType = {
  [key: string]: string;
};

const useTranslation = (translation: TranslationType): useTranslationType => {
  const { locale = LangEnum.En } = useRouter();

  return translation[locale as keyof typeof translation];
};

export default useTranslation;
