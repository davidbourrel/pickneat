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
                <link rel="icon" href="/favicon.svg" />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, maximum-scale=5"
                />
                <title>{`PickN\`Eat`}</title>
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
