import styles from './LanguageSwitcher.module.css';
import CheckMark from '../CheckMark';
import { useRouter } from 'next/router';
import { LangItemProps } from './types';

const LangItem = ({ lang, incomingLocale }: LangItemProps) => {
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
