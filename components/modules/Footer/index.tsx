import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';
import Link from 'components/elements/Link';
import Heading from 'components/elements/Heading';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className={styles.footer}>
      <div className={`${styles.columnsContainer} container`}>
        <nav className={styles.column}>
          <Heading level={3}>{t('aboutUs')}</Heading>
          <ul>
            <li>
              <Link href="/">{t('leadershipTeam')}</Link>
            </li>
            <li>
              <Link href="/">{t('valuesInAction')}</Link>
            </li>
            <li>
              <Link href="/">{t('franchiseInfo')}</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.column}>
          <Heading level={3}>{t('careers')}</Heading>
          <ul>
            <li>
              <Link href="/">{t('employeePerks')}</Link>
            </li>
            <li>
              <Link href="/">{t('workingWithUs')}</Link>
            </li>
            <li>
              <Link href="/">{t('applyNow')}</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.column}>
          <Heading level={3}>{t('contactUs')}</Heading>
          <ul>
            <li>
              <Link href="/">{t('restaurantFeedback')}</Link>
            </li>
            <li>
              <Link href="/">{t('frequentlyAskedQuestions')}</Link>
            </li>
            <li>
              <Link href="/">{t('sendAnEmail')}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
