import { FC, useMemo } from 'react';
import Head from 'next/head';
import navigation from 'public/translations/navigation.json';
import useTranslation from 'hooks/useTranslation';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession, UserProfile } from '@auth0/nextjs-auth0';
import Link from 'components/elements/Link';
import styles from './Profile.module.css';
import Button from 'components/elements/buttons/Button';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';

interface ProfileProps {
  user: UserProfile;
}

const Profile: FC<ProfileProps> = ({ user }) => {
  const { login, logout, logoutTitle } = useTranslation(navigation);

  const userPicture = useMemo(
    () =>
      user && user.picture ? (
        <img
          src={user.picture}
          className={styles.profilePicture}
          alt="User profile"
        />
      ) : null,
    [user]
  );

  return (
    <main className="sidePadding">
      <Head>
        <title>PickN`Eat | {login}</title>
      </Head>
      <Heading level={HeadingLevelEnum.One} className={styles.profileTitle}>
        [Profile]
      </Heading>
      {userPicture}
      <p>nickname: {user.nickname}</p>
      <p>name: {user.name}</p>
      <Link title={logoutTitle} href="/api/auth/logout">
        <Button> {logout}</Button>
      </Link>
    </main>
  );
};

interface GetServerSidePropsInterface {
  req: NextApiRequest;
  res: NextApiResponse;
}

export const getServerSideProps = async ({
  req,
  res,
}: GetServerSidePropsInterface) => {
  const session = await getSession(req, res);

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/auth/login',
    });
    return res.end();
  }

  return { props: { user: session.user } };
};

export default Profile;
