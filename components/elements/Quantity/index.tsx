import { useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import useAddToCart from 'contexts/cartContext/useAddToCart ';
import useCart from 'contexts/cartContext/useCart';
import { ClassNameComponentProps } from '_types/components';
import { Product } from '_types/products';
import Button from '../buttons/Button';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';
import styles from './Quantity.module.css';

interface QuantityProps extends ClassNameComponentProps {
  product: Product;
}

export default function Quantity({ product, className = '' }: QuantityProps) {
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
        <MinusButton productId={product_id} />
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
        {in_stock ? (amount === 0 ? addToCartButton : quantityButtons) : null}
      </div>
    ),
    [computedClassName, in_stock, amount, addToCartButton, quantityButtons]
  );

  return quantity;
}
