import { FC, useMemo } from 'react';
import Image from 'next/image';
import { Products } from '_types/products';
import Heading from '../Heading';
import { HeadingLevelEnum } from '../Heading/types';
import styles from './ProductCard.module.css';
import Link from '../Link';
import PriceTag from '../PriceTag';
import Quantity from '../Quantity';
import { useTranslations } from 'next-intl';
import { GetStaticProps } from 'next/types';

interface ProductCardProps {
  product: Products;
}
const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { image, name, price, new_release, product_id } = product;
  const t = useTranslations('Home');

  const badgeNewRelease = useMemo(
    () =>
      new_release && (
        <div className={styles.badge}>{t('badgeNewReleaseText')}</div>
      ),
    [new_release, t]
  );

  const cardImage = useMemo(
    () =>
      image && (
        <Link
          href={`product/${product_id}`}
          className={styles.imageContainer}
          title={t('seeMoreDetails')}
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
    [image, name, t, product_id]
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  };
};

export default ProductCard;
