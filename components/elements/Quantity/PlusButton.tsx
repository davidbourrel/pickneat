import { useCallback } from 'react';
import useAddToCart from 'contexts/cartContext/useAddToCart ';
import styles from './Quantity.module.css';
import { PlusButtonProps } from './types';

// Static components
import Button from '../buttons/Button';

const PlusButton = ({ product }: PlusButtonProps) => {
  const addToCart = useAddToCart();

  const handleAddProductClick = useCallback(
    () => addToCart(product),
    [addToCart, product]
  );
  return (
    <Button
      className={styles.plus}
      headless
      onClick={handleAddProductClick}
      absoluteLoader
    >
      <span>&#43;</span>
    </Button>
  );
};
export default PlusButton;
