import { FC, useMemo } from 'react';
import Image from 'next/image';
import { Products } from '_types/products';
import Heading from '../Heading';
import { HeadingLevelEnum } from '../Heading/types';
import styles from './ProductCard.module.css';
import useTranslation from 'hooks/useTranslation';
import home from 'public/translations/pages/home.json';
import Link from '../Link';
import PriceTag from '../PriceTag';
import Quantity from '../Quantity';

interface ProductCardProps {
  product: Products;
}
const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { image, name, price, new_release, product_id } = product;
  const { badgeNewReleaseText, seeMoreDetails } = useTranslation(home);

  const badgeNewRelease = useMemo(
    () =>
      new_release && <div className={styles.badge}>{badgeNewReleaseText}</div>,
    [new_release, badgeNewReleaseText]
  );

  const cardImage = useMemo(
    () =>
      image && (
        <Link
          href={`product/${product_id}`}
          className={styles.imageContainer}
          title={seeMoreDetails}
        >
          <Image
            src={image}
            alt={name}
            width={400}
            height={140}
            className={styles.image}
          />
        </Link>
      ),
    [image, name, seeMoreDetails, product_id]
  );

  const cardTitle = useMemo(
    () =>
      name && (
        <Heading className={styles.title} level={HeadingLevelEnum.Three}>
          {name}
        </Heading>
      ),
    [name]
  );

  return (
    <li className={styles.card}>
      {cardImage}
      {badgeNewRelease}
      <div className={styles.cardContent}>
        <div className={styles.titleContainer}>
          {cardTitle}
          <div className={styles.priceContainer}>
            <PriceTag price={price} className={styles.price} />
          </div>
        </div>
        <Quantity product={product} />
      </div>
    </li>
  );
};

export default ProductCard;
