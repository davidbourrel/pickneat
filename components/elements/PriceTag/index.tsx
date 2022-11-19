import { FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import styles from './PriceTag.module.css';
import { ClassNameComponentProps } from '_types/components';

interface PriceTagProps extends ClassNameComponentProps {
  price: number;
}

const PriceTag: FC<PriceTagProps> = ({ price, className = '' }) => {
  const { locale } = useRouter();

  const priceWithCurrencySymbol = useMemo(() => {
    switch (locale) {
      case 'fr':
        return <span className={`${styles.price} ${className}`}>{price}€</span>;
      case 'en':
        return <span className={`${styles.price} ${className}`}>${price}</span>;
      default:
        return null;
    }
  }, [price, locale, className]);

  return priceWithCurrencySymbol;
};

export default PriceTag;
