import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import navigation from 'public/translations/navigation.json';
import useTranslation from 'hooks/useTranslation';
import auth0 from 'lib/auth0';
import type { NextApiRequest, NextApiResponse } from 'next';

const Profile: FC = ({ user }: any) => {
  const { locale } = useRouter();

  const translations = useTranslation(navigation, locale);
  const { login } = translations;

  return (
    <main>
      <Head>
        <title>PickN`Eat | {login}</title>
      </Head>
      <h1>Profile</h1>
      <img src={user.picture} alt="toto test" />
      <p>nickname: {user.nickname}</p>
      <p>name: {user.name}</p>
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
