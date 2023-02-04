import { useMemo } from 'react';
import styles from './PriceTag.module.css';
import { formatNumberToPrice } from 'utils/formatNumberToPrice';
import { PriceTagProps } from './types';

export default function PriceTag({ price, className = '' }: PriceTagProps) {
  const computedClassName = useMemo(
    () => `${styles.price} ${className}`,
    [className]
  );

  const priceTag = useMemo(
    () => (
      <span className={computedClassName}>{formatNumberToPrice(price)}</span>
    ),
    [computedClassName, price]
  );

  return priceTag;
}
