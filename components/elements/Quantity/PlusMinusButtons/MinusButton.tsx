import { useCallback } from 'react';
import useRemoveCart from 'contexts/cartContext/useRemoveCart';
import Button from '../../buttons/Button';
import styles from './PlusMinusButtons.module.css';

interface MinusButtonProps {
  productId: string;
}

export default function MinusButton({ productId }: MinusButtonProps) {
  const { removeFromCart } = useRemoveCart();

  const handleRemoveProductClick = useCallback(
    () => removeFromCart(productId),
    [removeFromCart, productId]
  );
  return (
    <Button
      className={styles.minus}
      headless
      onClick={handleRemoveProductClick}
    >
      <span>&#8722;</span>
    </Button>
  );
}
