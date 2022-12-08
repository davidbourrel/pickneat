import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import styles from './PriceTag.module.css';
import { ClassNameComponentProps } from '_types/components';
import { LangEnum } from '_types/lang';
import { GetStaticPropsContext } from 'next';
import { pick } from 'lodash';

interface PriceTagProps extends ClassNameComponentProps {
  price: number;
}

export default function PriceTag({ price, className = '' }: PriceTagProps) {
  const { locale } = useRouter();
  const t = useTranslations('Product');

  const computedClassName = useMemo(
    () => `${styles.price} ${className}`,
    [className]
  );

  const euroFormat = useMemo(
    () =>
      t(
        'price',
        { price },
        {
          number: {
            currency: {
              style: 'currency',
              currency: 'EUR',
            },
          },
        }
      ),
    [price, t]
  );

  const dollarFormat = useMemo(
    () =>
      t(
        'price',
        { price },
        {
          number: {
            currency: {
              style: 'currency',
              currency: 'EUR',
            },
          },
        }
      ),
    [price, t]
  );

  const priceWithCurrencySymbol = useMemo(() => {
    switch (locale) {
      case LangEnum.Fr:
        return <span className={computedClassName}>{euroFormat}</span>;
      case LangEnum.En:
        return <span className={computedClassName}>{dollarFormat}</span>;
      default:
        return null;
    }
  }, [locale, computedClassName, euroFormat, dollarFormat]);

  return priceWithCurrencySymbol;
}

PriceTag.messages = ['Product'];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        await import(`../../../messages/${locale}.json`),
        PriceTag.messages
      ),
    },
  };
}
