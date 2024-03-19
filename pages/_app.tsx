import { UserProvider } from '@auth0/nextjs-auth0/client';
import { MyAppProps } from '_types/app';
import { CheckoutProvider } from 'contexts/checkoutContext';
import { ThemeProvider } from 'contexts/themeContext';
import useKonami from 'hooks/useKonami';
import { NextIntlProvider } from 'next-intl';
import { Baloo_2 } from 'next/font/google';
import Head from 'next/head';
import Router from 'next/router';
import nProgress from 'nprogress';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import PageLayout from '../components/modules/PageLayout';
import { store } from '../redux/store';
import '../styles/globals.css';

const fontFamily = Baloo_2({ display: 'swap', subsets: ['latin'] });

const MyApp = ({ Component, pageProps }: MyAppProps) => {
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

  useKonami();

  return (
    <div id="app" className={`app ${fontFamily.className}`}>
      <Provider store={store}>
        <NextIntlProvider messages={pageProps.messages}>
          <ThemeProvider>
            <UserProvider>
              <CheckoutProvider>
                <Head>
                  <link rel="icon" href="/favicon.ico" />
                  <title>{`PickN\`Eat`}</title>
                  <meta name="title" content="PickN`Eat" />
                  <meta
                    name="description"
                    content="Bienvenue sur PickN`Eat, le premier site de commande de burger en ligne qui se démarque par sa simplicité d'utilisation et de sa multitude de choix"
                  />
                  <meta property="og:type" content="website" />
                  <meta
                    property="og:url"
                    content="https://pickneat.vercel.app"
                  />
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
              </CheckoutProvider>
            </UserProvider>
          </ThemeProvider>
        </NextIntlProvider>
      </Provider>
    </div>
  );
};
export default MyApp;
