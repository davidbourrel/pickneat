import { FC } from 'react';
import styles from './LanguageSwitcher.module.css';
import useLang from 'contexts/i18nContext/useLang';
import CheckMark from '../CheckMark';

interface LangItemProps {
  countryLang: string;
  locale: string;
}

const LangItem: FC<LangItemProps> = ({ countryLang, locale }) => {
  const { lang } = useLang();

  return (
    <>
      {lang === locale ? (
        <div className={styles.activeCountry}>
          <span>{countryLang}</span>
          <CheckMark />
        </div>
      ) : (
        <span>{countryLang}</span>
      )}
    </>
  );
};

export default LangItem;
