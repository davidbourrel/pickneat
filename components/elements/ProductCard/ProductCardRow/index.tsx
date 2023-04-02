import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './ProductCardRow.module.css';
import { CartStateEnum } from 'contexts/cartContext/types';
import { useCartDispatch } from 'contexts/cartContext/useCartDispatch';
import { ProductCardProps } from '../types';

// Static components
import Link from 'components/elements/Link';
import Heading from 'components/elements/Heading';
import Quantity from 'components/elements/Quantity';
import PriceTag from 'components/elements/PriceTag';
import Button from 'components/elements/buttons/Button';

const ProductCardRow = ({ product }: ProductCardProps) => {
  const { product_id, name, price, image, category, amount } = product;

  const dispatch = useCartDispatch();
  const t = useTranslations('Cart');

  const computedPrice = amount ? price * amount : price;

  const handleDeleteItemsClick = () => {
    dispatch({
      type: CartStateEnum.DeleteItems,
      product_id,
    });
  };

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
            onClick={handleDeleteItemsClick}
            headless
            className={styles.removeProductButton}
            absoluteLoader
          >
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
