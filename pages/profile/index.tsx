import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import type { GetServerSidePropsContext } from 'next';
import { getSession, UserProfile } from '@auth0/nextjs-auth0';
import Link from 'components/elements/Link';
import styles from './Profile.module.css';
import Button from 'components/elements/buttons/Button';
import Heading from 'components/elements/Heading';
import Image from 'next/image';
import { pick } from 'lodash';
import PageLayout from 'components/modules/PageLayout';
import MainContentLayout from 'components/modules/MainContentLayout';

interface ProfileProps {
  user: UserProfile;
}

export default function Profile({ user }: ProfileProps) {
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
    <MainContentLayout>
      <Head>
        <title>{`PickN\`Eat | ${t('login')}`}</title>
      </Head>
      <Heading level={1} className={styles.profileTitle}>
        [Profile]
      </Heading>
      {userPicture}
      <p>nickname: {user.nickname}</p>
      <p>name: {user.name}</p>
      <Link title={t('logout')} href="/api/auth/logout">
        <Button>{t('logout')}</Button>
      </Link>
    </MainContentLayout>
  );
}

Profile.messages = ['Navigation', ...PageLayout.messages];

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
      messages: pick(
        await import(`../../messages/${locale}.json`),
        Profile.messages
      ),
    },
  };
};
