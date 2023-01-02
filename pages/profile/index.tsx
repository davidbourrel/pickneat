import { useMemo } from 'react';
import type { GetServerSidePropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Head from 'next/head';
import styles from './Profile.module.css';
import { getSession, UserProfile } from '@auth0/nextjs-auth0';
import { pick } from 'lodash';
import Link from 'components/elements/Link';
import Button from 'components/elements/buttons/Button';
import Heading from 'components/elements/Heading';
import PageLayout from 'components/modules/PageLayout';
import MainContentLayout from 'components/modules/MainContentLayout';

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
      >
        <Button tabIndex={-1}>{t2('logout')}</Button>
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
