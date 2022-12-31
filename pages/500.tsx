import { GetStaticPropsContext } from 'next/types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { pick } from 'lodash';
import Heading from 'components/elements/Heading';
import Button from 'components/elements/buttons/Button';
import PageLayout from 'components/modules/PageLayout';
import MainContentLayout from 'components/modules/MainContentLayout';

export default function NotFound() {
  const { back } = useRouter();

  const t = useTranslations('Errors');

  return (
    <MainContentLayout center>
      <Head>
        <title>{`PickN\`Eat | ${t('shortError500')}`}</title>
      </Head>
      <Heading level={1} error className="errorTitle">
        {t('longError500')}
      </Heading>
      <Button onClick={back}>{t('backButtonMessage')}</Button>
    </MainContentLayout>
  );
}

NotFound.messages = ['Errors', ...PageLayout.messages];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        await import(`../messages/${locale}.json`),
        NotFound.messages
      ),
    },
  };
}
