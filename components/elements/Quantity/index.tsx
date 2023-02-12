import { useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import useAddToCart from 'contexts/cartContext/useAddToCart ';
import useCart from 'contexts/cartContext/useCart';
import styles from './Quantity.module.css';
import { QuantityProps } from './types';

// Static Components
import Button from '../buttons/Button';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';

const Quantity = ({ product, className = '' }: QuantityProps) => {
  const { product_id, in_stock } = product;

  const t = useTranslations('Product');

  const cart = useCart();
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

  const quantityButtons = useMemo(
    () => (
      <>
        <MinusButton product_id={product_id} />
        <span className={styles.quantity}>{amount}</span>
        <PlusButton product={product} />
      </>
    ),
    [product_id, amount, product]
  );

  const addToCartButton = useMemo(
    () => (
      <Button
        onClick={handleAddProductClick}
        className={styles.addToCartButton}
      >
        <span>&#43;</span>
        {t('addToCartTextButton')}
      </Button>
    ),
    [handleAddProductClick, t]
  );

  const quantity = useMemo(
    () => (
      <div className={computedClassName}>
        {in_stock && amount === 0 ? addToCartButton : quantityButtons}
      </div>
    ),
    [computedClassName, in_stock, amount, addToCartButton, quantityButtons]
  );

  return quantity;
};
export default Quantity;
