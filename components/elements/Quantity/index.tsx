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
    () =>
      amount > 0 && in_stock ? <MinusButton productId={product_id} /> : null,
    [amount, in_stock, product_id]
  );

  const quantity = useMemo(
    () =>
      in_stock ? (
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
        )
      ) : null,
    [in_stock, amount, handleAddProductClick, t]
  );

  const plusButton = useMemo(
    () => (amount > 0 && in_stock ? <PlusButton product={product} /> : null),
    [amount, in_stock, product]
  );

  return (
    <div className={computedClassName}>
      {minusButton}
      {quantity}
      {plusButton}
    </div>
  );
}
