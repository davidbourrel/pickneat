import Head from 'next/head';
import { useRouter } from 'next/router';
import useTranslation from 'hooks/useTranslation';
import errors from 'public/translations/pages/errors.json';
import Headings from 'components/elements/Headings';
import { HeadingsLevelEnum } from 'components/elements/Headings/types';
import Button from 'components/elements/buttons/Button';

const NotFound = () => {
  const { back } = useRouter();

  const { shortError404, longError404, backButton } = useTranslation(errors);

  return (
    <main id="not-found" className="sidePadding">
      <Head>
        <title>PickN`Eat | {shortError404}</title>
      </Head>
      <Headings level={HeadingsLevelEnum.One}>{longError404}</Headings>
      <Button onClick={back}>{backButton}</Button>
    </main>
  );
};

export default NotFound;
