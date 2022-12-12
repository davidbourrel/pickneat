import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';
import Head from 'next/head';
import Router from 'next/router';
import nProgress from 'nprogress';
import PageLayout from '../components/modules/PageLayout';
import '../styles/globals.css';
import useKonami from 'hooks/useKonami';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ThemeProvider } from 'contexts/themeContext';
import { CartProvider } from 'contexts/cartContext';

type PageProps = {
  messages: IntlMessages;
};

type Props = Omit<AppProps<PageProps>, 'pageProps'> & {
  pageProps: PageProps;
};

export default function MyApp({ Component, pageProps }: Props) {
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
    <div id="app" className="app">
      <NextIntlProvider messages={pageProps.messages}>
        <ThemeProvider>
          <UserProvider>
            <CartProvider>
              <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{`PickN\`Eat`}</title>
                <meta name="title" content="PickN`Eat" />
                <meta
                  name="description"
                  content="Bienvenue sur PickN`Eat, le premier site de commande de burger en ligne qui se démarque par sa simplicité d'utilisation et de sa multitude de choix"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://pickneat.vercel.app" />
                <meta property="og:title" content="PickN`Eat" />
                <meta
                  property="og:description"
                  content="Bienvenue sur PickN`Eat, le premier site de commande de burger en ligne qui se démarque par sa simplicité d'utilisation et de sa multitude de choix"
                />
                <meta
                  property="og:image"
                  content="https://pickneat.vercel.app/pickneat.png"
                />
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                  property="twitter:url"
                  content="https://pickneat.vercel.app"
                />
                <meta property="twitter:title" content="PickN`Eat" />
                <meta
                  property="twitter:description"
                  content="Bienvenue sur PickN`Eat, le premier site de commande de burger en ligne qui se démarque par sa simplicité d'utilisation et de sa multitude de choix"
                />
                <meta
                  property="twitter:image"
                  content="https://pickneat.vercel.app/pickneat.png"
                />
              </Head>
              <PageLayout>
                <Component {...pageProps} />
              </PageLayout>
            </CartProvider>
          </UserProvider>
        </ThemeProvider>
      </NextIntlProvider>
    </div>
  );
}
