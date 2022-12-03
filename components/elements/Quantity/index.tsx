import { FC, useCallback, useMemo } from 'react';
import useAddToCart from 'contexts/cartContext/useAddToCart ';
import useCart from 'contexts/cartContext/useCart';
import { ClassNameComponentProps } from '_types/components';
import { Products } from '_types/products';
import Button from '../buttons/Button';
import MinusButton from '../buttons/PlusMinusButtons/MinusButton';
import PlusButton from '../buttons/PlusMinusButtons/PlusButton';
import styles from './Quantity.module.css';
import { useTranslations } from 'next-intl';
import { GetStaticProps } from 'next/types';

interface QuantityProps extends ClassNameComponentProps {
  product: Products;
}

const Quantity: FC<QuantityProps> = ({ product, className = '' }) => {
  const { product_id } = product;

  const t = useTranslations('Home');
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
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  };
};

export default Quantity;
