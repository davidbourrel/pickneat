import { useCallback } from 'react';
import useAddToCart from 'contexts/cartContext/useAddToCart ';
import Button from '../Button';
import styles from './PlusMinusButtons.module.css';
import { Product } from '_types/products';

interface PlusButtonProps {
  product: Product;
}

export default function PlusButton({ product }: PlusButtonProps) {
  const addToCart = useAddToCart();

  const handleAddProductClick = useCallback(
    () => addToCart(product),
    [addToCart, product]
  );
  return (
    <Button className={styles.plus} headless onClick={handleAddProductClick}>
      <span>&#43;</span>
    </Button>
  );
}
