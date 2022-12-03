import { FC } from 'react';
import styles from './LanguageSwitcher.module.css';
import CheckMark from '../CheckMark';
import { useRouter } from 'next/router';

interface LangItemProps {
  lang: string;
  incomingLocale: string;
}

const LangItem: FC<LangItemProps> = ({ lang, incomingLocale }) => {
  const { locale } = useRouter();

  return locale === incomingLocale ? (
    <div className={styles.activeCountry}>
      <span>{lang}</span>
      <CheckMark />
    </div>
  ) : (
    <span>{lang}</span>
  );
};

export default LangItem;
