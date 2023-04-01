import styles from './PriceTag.module.css';
import { formatNumberToPrice } from 'utils/formatNumberToPrice';
import { PriceTagProps } from './types';

const PriceTag = ({ price, className = '' }: PriceTagProps) => {
  const computedClassName = `${styles.price} ${className}`;

  return (
    <span className={computedClassName}>{formatNumberToPrice(price)}</span>
  );
};
export default PriceTag;
