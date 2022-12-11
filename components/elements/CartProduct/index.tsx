import { useMemo } from 'react';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { pick } from 'lodash';
import styles from './CartProduct.module.css';
import { Product } from '_types/products';
import useRemoveCart from 'contexts/cartContext/useRemoveCart';
import Link from '../Link';
import Heading from '../Heading';
import Quantity from '../Quantity';
import PriceTag from '../PriceTag';
import Button from '../buttons/Button';

interface CartProductProps {
  product: Product;
}

export default function CartProduct({ product }: CartProductProps) {
  const { product_id, name, price, in_stock, image, category, amount } =
    product;

  const { removeItemsFromCart } = useRemoveCart();
  const t = useTranslations('Cart');

  const totalPriceOfProduct = useMemo(() => price * amount, [price, amount]);

  const imageBox = useMemo(
    () => (
      <Link href={`product/${product_id}`} className={styles.imageContainer}>
        <Image
          src={image}
          alt={name}
          width={400}
          height={140}
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
          <span>
            {in_stock ? (
              <span className={styles.inStock}>{t('inStock')}</span>
            ) : (
              <span className={styles.outOfStock}>{t('outOfStock')}</span>
            )}
          </span>
        </div>

        <Button
          onClick={() => removeItemsFromCart(product_id)}
          headless
          className={styles.removeProductButton}
        >
          {t('remove')}
        </Button>
      </div>
    ),
    [name, category, in_stock, removeItemsFromCart, product_id, t]
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
    <div className={styles.cartProduct}>
      {imageBox}
      <div className={styles.cartProductContent}>
        {about}
        {priceAndQuantity}
      </div>
    </div>
  );
}

CartProduct.messages = ['Cart', 'Product'];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        await import(`../../../messages/${locale}.json`),
        CartProduct.messages
      ),
    },
  };
}
