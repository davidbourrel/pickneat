import { FC, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import navigation from 'public/translations/navigation.json';
import useTranslation from 'hooks/useTranslation';
import auth0 from 'lib/auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import { UserProfile } from '@auth0/nextjs-auth0';
import Link from 'components/elements/Link';

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
    <main>
      <Head>
        <title>PickN`Eat | {login}</title>
      </Head>
      <h1>Profile</h1>
      {userPicture}
      <p>nickname: {user.nickname}</p>
      <p>name: {user.name}</p>
      <Link title={logoutTitle} href="/api/logout">
        {logout}
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
  // Here you can check authentication status directly before rendering the page,
  // however the page would be a serverless function, which is more expensive and
  // slower than a static page with client side authentication
  const session = await auth0.getSession(req, res);

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/login',
    });
    res.end();
    return;
  }

  return { props: { user: session.user } };
};

export default Profile;
