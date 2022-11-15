import { FC, useMemo } from 'react';
import Image from 'next/image';
import { Products } from '_types/products';
import Quantity from './Quantity';
import Heading from '../Heading';
import { HeadingLevelEnum } from '../Heading/types';
import styles from './ProductCard.module.css';
import useTranslation from 'hooks/useTranslation';
import home from 'public/translations/pages/home.json';
import { useRouter } from 'next/router';

interface ProductCardProps {
  product: Products;
}
const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { image, name, price, new_release } = product;

  const { locale } = useRouter();

  const { badgeNewReleaseText } = useTranslation(home);

  const badgeNewRelease = useMemo(
    () =>
      new_release ? (
        <div className={styles.badge}>{badgeNewReleaseText}</div>
      ) : null,
    [new_release, badgeNewReleaseText]
  );

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

  const cardPrice = useMemo(() => {
    switch (locale) {
      case 'fr':
        return <span className={styles.cardPrice}>{price}€</span>;
      case 'en':
        return <span className={styles.cardPrice}>${price}</span>;
      default:
        return null;
    }
  }, [price, locale]);

  return (
    <li className={styles.card}>
      {cardImage}
      {badgeNewRelease}
      <div className={styles.cardContent}>
        {cardTitle}
        {cardPrice}
        <Quantity product={product} />
      </div>
    </li>
  );
};

export default ProductCard;
