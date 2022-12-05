import { useMemo } from 'react';
import { useRouter } from 'next/router';
import styles from './PriceTag.module.css';
import { ClassNameComponentProps } from '_types/components';
import { LangEnum } from '_types/lang';

interface PriceTagProps extends ClassNameComponentProps {
  price: number;
}

export default function PriceTag({ price, className = '' }: PriceTagProps) {
  const { locale } = useRouter();

  const priceWithCurrencySymbol = useMemo(() => {
    switch (locale) {
      case LangEnum.Fr:
        return <span className={`${styles.price} ${className}`}>{price}€</span>;
      case LangEnum.En:
        return <span className={`${styles.price} ${className}`}>${price}</span>;
      default:
        return null;
    }
  }, [price, locale, className]);

  return priceWithCurrencySymbol;
}
