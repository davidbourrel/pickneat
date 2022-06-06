import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useTranslation from 'hooks/useTranslation';
import errors from 'public/translations/pages/errors.json';

const NotFound: FC = () => {
  const { locale } = useRouter();

  const translations = useTranslation(errors, locale);
  const { shortError500, longError500 } = translations;

  return (
    <main id="not-found">
      <Head>
        <title>PickN`Eat | {shortError500}</title>
      </Head>
      <h1>{longError500}</h1>
    </main>
  );
};

export default NotFound;
