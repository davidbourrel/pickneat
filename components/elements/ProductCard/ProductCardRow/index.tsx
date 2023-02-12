import { useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './ProductCardRow.module.css';
import { ProductCardProps } from '../types';
import useRemoveCart from 'contexts/cartContext/useRemoveCart';

// Static components
import Link from 'components/elements/Link';
import Heading from 'components/elements/Heading';
import Quantity from 'components/elements/Quantity';
import PriceTag from 'components/elements/PriceTag';
import Button from 'components/elements/buttons/Button';

const ProductCardRow = ({ product }: ProductCardProps) => {
  const { product_id, name, price, image, category, amount } = product;

  const { removeItemsFromCart } = useRemoveCart();
  const t = useTranslations('Cart');

  const totalPriceOfProduct = useMemo(() => price * amount, [price, amount]);

  const imageBox = useMemo(
    () => (
      <Link href={`product/${product_id}`} className={styles.imageContainer}>
        <Image
          src={image}
          alt={name}
          width={280}
          height={280}
          className={styles.image}
        />
      </Link>
    ),
    [image, product_id, name]
  );

  const about = useMemo(
    () => (
      <div className={styles.aboutContainer}>
        <div className={styles.about}>
          <Heading level={2} className={styles.title}>
            {name}
          </Heading>
          <span>{category}</span>
        </div>

        <Button
          onClick={() => removeItemsFromCart(product_id)}
          headless
          className={styles.removeProductButton}
          absoluteLoader
        >
          {t('remove')}
        </Button>
      </div>
    ),
    [name, category, removeItemsFromCart, product_id, t]
  );

  const priceAndQuantity = useMemo(
    () => (
      <div className={styles.priceAndQuantityContainer}>
        <PriceTag price={totalPriceOfProduct} className={styles.price} />
        <Quantity product={product} className={styles.quantity} />
      </div>
    ),
    [totalPriceOfProduct, product]
  );

  return (
    <li className={styles.card}>
      {imageBox}
      <div className={styles.cardContent}>
        {about}
        {priceAndQuantity}
      </div>
    </li>
  );
};
export default ProductCardRow;
