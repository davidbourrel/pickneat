import styles from './LanguageSwitcher.module.css';
import CheckMark from '../CheckMark';
import { useRouter } from 'next/router';

interface LangItemProps {
  lang: string;
  incomingLocale: string;
}

export default function LangItem({ lang, incomingLocale }: LangItemProps) {
  const { locale } = useRouter();

  return locale === incomingLocale ? (
    <div className={styles.activeCountry}>
      <span>{lang}</span>
      <CheckMark />
    </div>
  ) : (
    <span>{lang}</span>
  );
}
