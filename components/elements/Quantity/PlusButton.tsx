import { useCartStore } from 'stores/useCartStore';
import Button from '../buttons/Button';
import styles from './Quantity.module.css';
import { PlusButtonProps } from './types';

const PlusButton = ({ product }: PlusButtonProps) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <Button
      className={styles.plus}
      headless
      onClick={() => addItem(product)}
      absoluteLoader>
      <span>&#43;</span>
    </Button>
  );
};
export default PlusButton;
