import { FC, useMemo } from 'react';
import { Products } from '_types/products';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Products;
}
const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const description = useMemo(
    () =>
      product?.description ? (
        <div className={styles.cardDescription}>{product.description}</div>
      ) : null,
    [product.description]
  );
  return (
    <li className={styles.card}>
      <img
        src={product?.image}
        className={styles.cardImage}
        alt="todo use nextjs"
      />
      {description}
      <button>Details</button>
    </li>
  );
};

export default ProductCard;
