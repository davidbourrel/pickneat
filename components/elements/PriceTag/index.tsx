import { useMemo } from 'react';
import styles from './PriceTag.module.css';
import { ClassNameComponentProps } from '_types/components';

interface PriceTagProps extends ClassNameComponentProps {
  price: number;
}

export default function PriceTag({ price, className = '' }: PriceTagProps) {
  const computedClassName = useMemo(
    () => `${styles.price} ${className}`,
    [className]
  );

  const priceTag = useMemo(
    () => (
      <span className={computedClassName}>
        {new Intl.NumberFormat('fr', {
          style: 'currency',
          currency: 'EUR',
        }).format(price)}
      </span>
    ),
    [computedClassName, price]
  );

  return priceTag;
}
