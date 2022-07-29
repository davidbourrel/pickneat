import { FC } from 'react';
import { useRouter } from 'next/router';
import styles from './Footer.module.css';
import footer from 'public/translations/footer.json';
import useTranslation from 'hooks/useTranslation';
import Link from 'components/elements/Link';
import Headings from 'components/elements/Headings';
import { HeadingsLevelEnum } from 'components/elements/Headings/types';

const Footer: FC = () => {
  const { locale } = useRouter();

  const {
    aboutUs,
    leadershipTeam,
    valuesInAction,
    franchiseInfo,
    careers,
    employeePerks,
    workingWithUs,
    applyNow,
    contactUs,
    restaurantFeedback,
    frequentlyAskedQuestions,
    sendAnEmail,
  } = useTranslation(footer, locale);

  return (
    <footer className={styles.footer}>
      <div className={`${styles.blockContainer} container`}>
        <nav className={styles.block}>
          <Headings level={HeadingsLevelEnum.Three}>{aboutUs}</Headings>
          <ul>
            <li>
              <Link href="/">{leadershipTeam}</Link>
            </li>
            <li>
              <Link href="/">{valuesInAction}</Link>
            </li>
            <li>
              <Link href="/">{franchiseInfo}</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.block}>
          <Headings level={HeadingsLevelEnum.Three}>{careers}</Headings>
          <ul>
            <li>
              <Link href="/">{employeePerks}</Link>
            </li>
            <li>
              <Link href="/">{workingWithUs}</Link>
            </li>
            <li>
              <Link href="/">{applyNow}</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.block}>
          <Headings level={HeadingsLevelEnum.Three}>{contactUs}</Headings>
          <ul>
            <li>
              <Link href="/">{restaurantFeedback}</Link>
            </li>
            <li>
              <Link href="/">{frequentlyAskedQuestions}</Link>
            </li>
            <li>
              <Link href="/">{sendAnEmail}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
