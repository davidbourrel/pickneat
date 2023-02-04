import { useCallback } from 'react';
import useRemoveCart from 'contexts/cartContext/useRemoveCart';
import styles from './Quantity.module.css';
import { MinusButtonProps } from './types';

// Static components
import Button from '../buttons/Button';

export default function MinusButton({ product_id }: MinusButtonProps) {
  const { removeFromCart } = useRemoveCart();

  const handleRemoveProductClick = useCallback(
    () => removeFromCart(product_id),
    [removeFromCart, product_id]
  );
  return (
    <Button
      className={styles.minus}
      headless
      onClick={handleRemoveProductClick}
      absoluteLoader
    >
      <span>&#8722;</span>
    </Button>
  );
}
