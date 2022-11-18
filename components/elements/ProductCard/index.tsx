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
import Link from '../Link';

interface ProductCardProps {
  product: Products;
}
const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { image, name, price, new_release, product_id } = product;
  const { locale } = useRouter();
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
            className={styles.image}
            alt={name}
            src={image}
            width={400}
            height={140}
          />
        </Link>
      ),
    [image, name, seeMoreDetails, product_id]
  );

  const cardTitle = useMemo(
    () =>
      name && (
        <Heading className={styles.cardTitle} level={HeadingLevelEnum.Three}>
          {name}
        </Heading>
      ),
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
