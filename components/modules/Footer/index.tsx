import { FC } from 'react';
import { useRouter } from 'next/router';
import Container from '../Container';
import styles from './Footer.module.css';
import footer from 'public/translations/footer.json';
import useTranslation from 'hooks/useTranslation';
import Link from 'components/elements/Link';

const Footer: FC = () => {
  const { locale } = useRouter();

  const translations = useTranslation(footer, locale);
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
  } = translations;

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.blockContainer}>
          <div className={styles.block}>
            <h2>{aboutUs}</h2>
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
          </div>
          <div className={styles.block}>
            <h2>{careers}</h2>
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
          </div>
          <div className={styles.block}>
            <h2>{contactUs}</h2>
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
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
