import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useTranslation from 'hooks/useTranslation';
import errors from 'public/translations/pages/errors.json';
import Headings from 'components/elements/Headings';
import { HeadingsLevelEnum } from 'components/elements/Headings/types';

const NotFound: FC = () => {
  const { locale } = useRouter();

  const translations = useTranslation(errors, locale);
  const { shortError404, longError404 } = translations;

  return (
    <main id="not-found">
      <Head>
        <title>PickN`Eat | {shortError404}</title>
      </Head>
      <Headings level={HeadingsLevelEnum.One}>{longError404}</Headings>
    </main>
  );
};

export default NotFound;
