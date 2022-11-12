import { FC, useMemo } from 'react';
import Image from 'next/image';
import { Products } from '_types/products';
import Quantity from './Quantity';
import Heading from '../Heading';
import { HeadingLevelEnum } from '../Heading/types';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Products;
}
const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { image, name } = product;

  const cardImage = useMemo(
    () =>
      image ? (
        <Image
          alt={name}
          src={image}
          width={500}
          height={200}
          className={styles.cardImage}
        />
      ) : null,
    [image, name]
  );

  const cardTitle = useMemo(
    () =>
      name ? (
        <Heading className={styles.cardTitle} level={HeadingLevelEnum.Three}>
          {name}
        </Heading>
      ) : null,
    [name]
  );

  return (
    <li className={styles.card}>
      {cardImage}
      <div className={styles.cardContent}>
        {cardTitle}
        <Quantity product={product} />
      </div>
    </li>
  );
};

export default ProductCard;
