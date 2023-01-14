import { useMemo } from 'react';
import type { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Head from 'next/head';
import styles from './Profile.module.css';
import { getSession, UserProfile } from '@auth0/nextjs-auth0';
import { pick } from 'lodash';

// PageLayout static import to use with next-intl
import PageLayout from 'components/modules/PageLayout';

// Dynamic imports
const Heading = dynamic(() => import('components/elements/Heading'));
const Button = dynamic(() => import('components/elements/buttons/Button'));
const Link = dynamic(() => import('components/elements/Link'));
const MainContentLayout = dynamic(
  () => import('components/modules/MainContentLayout')
);

interface ProfileProps {
  user: UserProfile;
}

export default function Profile({ user }: ProfileProps) {
  const { nickname, email, picture } = user;

  const t = useTranslations('Profile');
  const t2 = useTranslations('Navigation');

  const userPicture = useMemo(
    () =>
      picture ? (
        <Image
          src={picture}
          alt="User profile"
          width={400}
          height={400}
          className={styles.profilePicture}
        />
      ) : null,
    [picture]
  );

  const userInformation = useMemo(
    () =>
      nickname && email ? (
        <div className={styles.userInformation}>
          <p>
            <span>{t('nickname')} :</span> {nickname}
          </p>
          <p>
            <span>{t('email')} :</span> {email}
          </p>
        </div>
      ) : null,
    [nickname, email, t]
  );

  return (
    <MainContentLayout>
      <Head>
        <title>{`PickN\`Eat | ${t('profile')}`}</title>
      </Head>
      <Heading level={1} className={styles.profileTitle}>
        {t('profile')}
      </Heading>

      {userPicture}

      {userInformation}

      <Link
        title={t2('logout')}
        href="/api/auth/logout"
        className={styles.logout}
        tabIndex={-1}
      >
        <Button>{t2('logout')}</Button>
      </Link>
    </MainContentLayout>
  );
}

Profile.messages = ['Navigation', 'Profile', ...PageLayout.messages];

export const getServerSideProps = async ({
  req,
  res,
  locale,
}: GetServerSidePropsContext) => {
  const session = getSession(req, res);

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/auth/login',
    });
    return res.end();
  }

  return {
    props: {
      user: session.user,
      messages: pick(
        await import(`../../messages/${locale}.json`),
        Profile.messages
      ),
    },
  };
};
