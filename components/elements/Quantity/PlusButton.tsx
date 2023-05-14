import { useCartStore } from 'stores/useCartStore';
import styles from './Quantity.module.css';
import { PlusButtonProps } from './types';

// Static components
import Button from '../buttons/Button';

const PlusButton = ({ product }: PlusButtonProps) => {
  const { addItem } = useCartStore();

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
