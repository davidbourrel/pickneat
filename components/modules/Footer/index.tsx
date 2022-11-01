import { FC } from 'react';
import styles from './Footer.module.css';
import footer from 'public/translations/footer.json';
import useTranslation from 'hooks/useTranslation';
import Link from 'components/elements/Link';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';

const Footer: FC = () => {
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
  } = useTranslation(footer);

  return (
    <footer className={styles.footer}>
      <div className={`${styles.blockContainer} container`}>
        <nav className={styles.block}>
          <Heading level={HeadingLevelEnum.Three}>{aboutUs}</Heading>
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
          <Heading level={HeadingLevelEnum.Three}>{careers}</Heading>
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
          <Heading level={HeadingLevelEnum.Three}>{contactUs}</Heading>
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
