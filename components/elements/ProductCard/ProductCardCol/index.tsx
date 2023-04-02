import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './ProductCardCol.module.css';
import { ProductCardProps } from '../types';

// Static components
import Heading from 'components/elements/Heading';
import PriceTag from 'components/elements/PriceTag';
import Quantity from 'components/elements/Quantity';

const ProductCardCol = ({ product }: ProductCardProps) => {
  const { image, name, price, new_release, product_id, in_stock } = product;
  const t = useTranslations('Product');

  const badgeNewRelease = new_release && (
    <div className={styles.badge}>{t('badgeNewReleaseText')}</div>
  );

  const cardImage = !!image && (
    <Link
      href={`product/${product_id}`}
      className={styles.imageContainer}
      title={t('seeMoreDetails')}>
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        className={styles.image}
      />
      {badgeNewRelease}
    </Link>
  );

  const cardTitle = !!name && (
    <Heading className={styles.title} level={3}>
      {name}
    </Heading>
  );

  const quantiy = in_stock && <Quantity product={product} />;

  const outOfStock = !in_stock && (
    <div className={styles.outOfStock}>
      <span className={styles.outOfStockText}>{t('outOfStock')}</span>
    </div>
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
        {quantiy}
      </div>
      {outOfStock}
    </li>
  );
};
export default ProductCardCol;
