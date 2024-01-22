import { useCartStore } from 'stores/useCartStore';
import Button from '../buttons/Button';
import styles from './Quantity.module.css';
import { MinusButtonProps } from './types';

const MinusButton = ({ product }: MinusButtonProps) => {
  const deleteItem = useCartStore((state) => state.deleteItem);

  return (
    <Button
      className={styles.minus}
      headless
      onClick={() => deleteItem(product)}
      absoluteLoader>
      <span>&#8722;</span>
    </Button>
  );
};
export default MinusButton;
