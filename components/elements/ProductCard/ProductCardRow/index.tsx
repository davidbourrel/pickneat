import Heading from 'components/elements/Heading';
import Link from 'components/elements/Link';
import PriceTag from 'components/elements/PriceTag';
import Quantity from 'components/elements/Quantity';
import Button from 'components/elements/buttons/Button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { AppDispatch } from 'redux/store';
import { removeFromCart } from '../../../../redux/cart/cartSlice';
import { useAppDispatch } from '../../../../redux/hooks';
import { ProductCardProps } from '../types';
import styles from './ProductCardRow.module.css';

const ProductCardRow = ({ product }: ProductCardProps) => {
  const { product_id, name, price, image, category, amount } = product;

  const t = useTranslations('Cart');

  const computedPrice = amount ? price * amount : price;

  const dispatch = useAppDispatch<AppDispatch>();

  return (
    <li className={styles.card}>
      <Link href={`product/${product_id}`} className={styles.imageContainer}>
        <Image
          src={image}
          alt={name}
          width={280}
          height={280}
          className={styles.image}
        />
      </Link>
      <div className={styles.cardContent}>
        <div className={styles.aboutContainer}>
          <div className={styles.about}>
            <Heading level={2} className={styles.title}>
              {name}
            </Heading>
            <span>{category}</span>
          </div>

          <Button
            onClick={() => dispatch(removeFromCart(product))}
            headless
            className={styles.removeProductButton}
            absoluteLoader>
            {t('remove')}
          </Button>
        </div>
        <div className={styles.priceAndQuantityContainer}>
          <PriceTag price={computedPrice} className={styles.price} />
          <Quantity product={product} className={styles.quantity} />
        </div>
      </div>
    </li>
  );
};
export default ProductCardRow;
