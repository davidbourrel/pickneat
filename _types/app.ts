import { AppProps } from 'next/app';
import { Product } from '_types/products';

type PageProps = {
  messages: IntlMessages;
};

export type MyAppProps = Omit<AppProps<PageProps>, 'pageProps'> & {
  pageProps: PageProps;
};

export default interface HomeProps {
  ssrProducts: Product[];
}

export type Maybe<T> = T | null;
