import { useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { GetStaticPropsContext } from 'next/types';
import useAddToCart from 'contexts/cartContext/useAddToCart ';
import useCart from 'contexts/cartContext/useCart';
import { ClassNameComponentProps } from '_types/components';
import { Product } from '_types/products';
import Button from '../buttons/Button';
import MinusButton from './PlusMinusButtons/MinusButton';
import PlusButton from './PlusMinusButtons/PlusButton';
import styles from './Quantity.module.css';
import { pick } from 'lodash';

interface QuantityProps extends ClassNameComponentProps {
  product: Product;
}

export default function Quantity({ product, className = '' }: QuantityProps) {
  const { product_id } = product;

  const t = useTranslations('Product');

  const { cart } = useCart();
  const addToCart = useAddToCart();

  const handleAddProductClick = useCallback(
    () => addToCart(product),
    [addToCart, product]
  );

  // Call productFromCart to get amount of this specific item
  const productFromCart = useMemo(
    () => cart.find((item) => item.product_id === product_id),
    [cart, product_id]
  );

  const amount = useMemo(
    () => (productFromCart?.amount ? productFromCart.amount : 0),
    [productFromCart?.amount]
  );

  const computedClassName = useMemo(
    () => `${styles.quantityContainer} ${className}`,
    [className]
  );

  const minusButton = useMemo(
    () => (amount > 0 ? <MinusButton productId={product_id} /> : null),
    [amount, product_id]
  );

  const quantity = useMemo(
    () =>
      amount === 0 ? (
        <Button
          onClick={handleAddProductClick}
          className={styles.addToCartButton}
        >
          <span>&#43;</span>
          {t('addToCartTextButton')}
        </Button>
      ) : (
        <span className={styles.quantity}>{amount}</span>
      ),
    [amount, handleAddProductClick, t]
  );

  const plusButton = useMemo(
    () => (amount > 0 ? <PlusButton product={product} /> : null),
    [amount, product]
  );

  return (
    <div className={computedClassName}>
      {minusButton}
      {quantity}
      {plusButton}
    </div>
  );
}

Quantity.messages = ['Product'];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        await import(`../../../messages/${locale}.json`),
        Quantity.messages
      ),
    },
  };
}
