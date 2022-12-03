import { GetStaticPropsContext } from 'next/types';
import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';
import Link from 'components/elements/Link';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import { pick } from 'lodash';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className={styles.footer}>
      <div className={`${styles.blockContainer} container`}>
        <nav className={styles.block}>
          <Heading level={HeadingLevelEnum.Three}>{t('aboutUs')}</Heading>
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
        <nav className={styles.block}>
          <Heading level={HeadingLevelEnum.Three}>{t('careers')}</Heading>
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
        <nav className={styles.block}>
          <Heading level={HeadingLevelEnum.Three}>{t('contactUs')}</Heading>
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
}

Footer.messages = ['Footer'];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        await import(`../../../messages/${locale}.json`),
        Footer.messages
      ),
    },
  };
}
