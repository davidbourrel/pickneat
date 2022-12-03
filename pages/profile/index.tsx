import { FC, useMemo } from 'react';
import Head from 'next/head';
import type { GetServerSidePropsContext } from 'next';
import { getSession, UserProfile } from '@auth0/nextjs-auth0';
import Link from 'components/elements/Link';
import styles from './Profile.module.css';
import Button from 'components/elements/buttons/Button';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface ProfileProps {
  user: UserProfile;
}

const Profile: FC<ProfileProps> = ({ user }) => {
  const t = useTranslations('Navigation');

  const userPicture = useMemo(
    () =>
      user && user.picture ? (
        <Image
          src={user.picture}
          alt="User profile"
          width={400}
          height={400}
          className={styles.profilePicture}
        />
      ) : null,
    [user]
  );

  return (
    <main className="sidePadding">
      <Head>
        <title>{`PickN\`Eat | ${t('login')}`}</title>
      </Head>
      <Heading level={HeadingLevelEnum.One} className={styles.profileTitle}>
        [Profile]
      </Heading>
      {userPicture}
      <p>nickname: {user.nickname}</p>
      <p>name: {user.name}</p>
      <Link title={t('logoutTitle')} href="/api/auth/logout">
        <Button> {t('logout')}</Button>
      </Link>
    </main>
  );
};

export const getServerSideProps = async ({
  req,
  res,
  locale,
}: GetServerSidePropsContext) => {
  const session = await getSession(req, res);

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/auth/login',
    });
    return res.end();
  }

  return {
    props: {
      user: session.user,
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
};

export default Profile;
