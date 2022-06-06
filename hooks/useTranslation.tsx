export type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

type useTranslationValue = {
  [key: string]: string;
};

const useTranslation = (obj: JSONValue, locale = 'en'): useTranslationValue => {
  return obj[locale as keyof typeof obj];
};

export default useTranslation;
