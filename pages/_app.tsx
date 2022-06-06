import { FC, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import nProgress from 'nprogress';
import Layout from '../components/modules/Layout';
import '../styles/globals.css';
import useTranslation from 'hooks/useTranslation';
import navigation from 'public/translations/navigation.json';
import useKonami from 'hooks/useKonami';
import { useFetchUser } from 'lib/user';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { user, loading } = useFetchUser();
  const { locale } = useRouter();
  const translations = useTranslation(navigation, locale);

  const { menu } = translations;

  useKonami();

  useEffect(() => {
    const handleRouteStart = (): void => {
      nProgress
        .configure({ showSpinner: false, trickleSpeed: 200, speed: 400 })
        .start();
    };
    const handleRouteDone = (): void => {
      nProgress.done();
    };

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteDone);
    Router.events.on('routeChangeError', handleRouteDone);

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteDone);
      Router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);

  return (
    <div id="app">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <title>PickN`Eat | {menu}</title>
        <link
          rel="preload"
          href="/fonts/Source_Sans_Pro/SourceSansPro-Black.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Source_Sans_Pro/SourceSansPro-BlackItalic.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Source_Sans_Pro/SourceSansPro-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Source_Sans_Pro/SourceSansPro-BoldItalic.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Source_Sans_Pro/SourceSansPro-SemiBold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Source_Sans_Pro/SourceSansPro-SemiBoldItalic.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Source_Sans_Pro/SourceSansPro-Italic.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Source_Sans_Pro/SourceSansPro-LightItalic.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Source_Sans_Pro/SourceSansPro-ExtraLight.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Source_Sans_Pro/SourceSansPro-ExtraLightItalic.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
      </Head>
      <Layout user={user} loading={loading}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
