import { FC, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import navigation from 'public/translations/navigation.json';
import useTranslation from 'hooks/useTranslation';
import auth0 from 'lib/auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import { UserProfile } from '@auth0/nextjs-auth0';
import Link from 'components/elements/Link';
import styles from './Profile.module.css';
import Button from 'components/elements/buttons/Button';
import Headings from 'components/elements/Headings';
import { HeadingsLevelEnum } from 'components/elements/Headings/types';

interface ProfileProps {
  user: UserProfile;
}

const Profile: FC<ProfileProps> = ({ user }) => {
  const { locale } = useRouter();

  const translations = useTranslation(navigation, locale);
  const { login, logout, logoutTitle } = translations;

  const userPicture = useMemo(
    () =>
      user && user.picture ? <img src={user.picture} alt="toto test" /> : null,
    [user]
  );

  return (
    <main className="sidePadding">
      <Head>
        <title>PickN`Eat | {login}</title>
      </Head>
      <Headings level={HeadingsLevelEnum.One} className={styles.profileTitle}>
        [Profile]
      </Headings>
      {userPicture}
      <p>nickname: {user.nickname}</p>
      <p>name: {user.name}</p>
      <Link title={logoutTitle} href="/api/logout">
        <Button> {logout}</Button>
      </Link>
    </main>
  );
};

interface getServerSidePropsInterface {
  req: NextApiRequest;
  res: NextApiResponse;
}

export const getServerSideProps = async ({
  req,
  res,
}: getServerSidePropsInterface) => {
  const session = await auth0.getSession(req, res);

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/login',
    });
    return res.end();
  }

  return { props: { user: session.user } };
};

export default Profile;
