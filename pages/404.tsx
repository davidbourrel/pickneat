import Head from 'next/head';
import { useRouter } from 'next/router';
import useTranslation from 'hooks/useTranslation';
import errors from 'public/translations/errors.json';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import Button from 'components/elements/buttons/Button';

const NotFound = () => {
  const { back } = useRouter();

  const { shortError404, longError404, backButtonMessage } =
    useTranslation(errors);

  return (
    <main className="notFound sidePadding">
      <Head>
        <title>PickN`Eat | {shortError404}</title>
      </Head>
      <Heading level={HeadingLevelEnum.One}>{longError404}</Heading>
      <Button onClick={back}>{backButtonMessage}</Button>
    </main>
  );
};

export default NotFound;
