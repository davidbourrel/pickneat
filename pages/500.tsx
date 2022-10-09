import Head from 'next/head';
import { useRouter } from 'next/router';
import useTranslation from 'hooks/useTranslation';
import errors from 'public/translations/pages/errors.json';
import Headings from 'components/elements/Headings';
import { HeadingsLevelEnum } from 'components/elements/Headings/types';
import Button from 'components/elements/buttons/Button';

const ServerError = () => {
  const { back } = useRouter();

  const { shortError500, longError500, backButton } = useTranslation(errors);

  return (
    <main id="not-found" className="sidePadding">
      <Head>
        <title>PickN`Eat | {shortError500}</title>
      </Head>
      <Headings level={HeadingsLevelEnum.One}>{longError500}</Headings>
      <Button onClick={back}>{backButton}</Button>
    </main>
  );
};

export default ServerError;
