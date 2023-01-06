import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Product } from '_types/products';
import Heading from '../Heading';
import styles from './ProductCard.module.css';
import Link from '../Link';
import PriceTag from '../PriceTag';
import Quantity from '../Quantity';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { image, name, price, new_release, product_id, in_stock } = product;
  const t = useTranslations('Product');

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
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            40vw"
            className={styles.image}
          />
          {badgeNewRelease}
        </Link>
      ),
    [image, name, t, product_id, badgeNewRelease]
  );

  const cardTitle = useMemo(
    () =>
      name && (
        <Heading className={styles.title} level={3}>
          {name}
        </Heading>
      ),
    [name]
  );

  const outOfStock = useMemo(
    () =>
      in_stock ? null : (
        <div className={styles.outOfStock}>
          <span className={styles.outOfStockText}>{t('outOfStock')}</span>
        </div>
      ),
    [in_stock, t]
  );

  return (
    <li className={styles.card}>
      {cardImage}
      <div className={styles.cardContent}>
        <div className={styles.titleContainer}>
          {cardTitle}
          <div className={styles.priceContainer}>
            <PriceTag price={price} className={styles.price} />
          </div>
        </div>
        <Quantity product={product} />
      </div>
      {outOfStock}
    </li>
  );
}
