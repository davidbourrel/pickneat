import { FC, useCallback } from 'react';
import useRemoveCart from 'contexts/cartContext/useRemoveCart';
import Button from '../Button';
import styles from './PlusMinusButtons.module.css';

interface MinusButtonProps {
  productId: string;
}

const MinusButton: FC<MinusButtonProps> = ({ productId }) => {
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
};

export default MinusButton;
