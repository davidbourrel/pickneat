import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useTranslation from 'hooks/useTranslation';
import navigation from 'public/translations/navigation.json';
import Headings from 'components/elements/Headings';
import { HeadingsLevelEnum } from 'components/elements/Headings/types';

const Admin: FC = () => {
  const { push, locale } = useRouter();
  const isUserAuthenticated = true;

  useEffect(() => {
    // checks if the user is authenticated
    isUserAuthenticated ? push('/admin') : push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserAuthenticated]);

  const translations = useTranslation(navigation, locale);
  const { admin } = translations;

  return (
    <main>
      <Head>
        <title>PickN`Eat | {admin}</title>
      </Head>
      <Headings level={HeadingsLevelEnum.One}>Admin</Headings>
    </main>
  );
};

export default Admin;
