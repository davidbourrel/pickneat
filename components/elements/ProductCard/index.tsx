import { FC, useMemo } from 'react';
import { Products } from '_types/products';
import QuantityButton from '../buttons/QuantityButton';
import Heading from '../Heading';
import { HeadingLevelEnum } from '../Heading/types';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Products;
}
const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const title = useMemo(
    () =>
      product?.name ? (
        <Heading className={styles.cardTitle} level={HeadingLevelEnum.Three}>
          {product.name}
        </Heading>
      ) : null,
    [product.name]
  );

  return (
    <li className={styles.card}>
      <img
        src={product?.image}
        className={styles.cardImage}
        alt="todo use nextjs"
      />
      <div className={styles.cardContent}>
        {title}
        <QuantityButton product={product} />
      </div>
    </li>
  );
};

export default ProductCard;
