import styles from './Quantity.module.css';
import { MinusButtonProps } from './types';
import { useCartStore } from 'stores/useCartStore';

// Static components
import Button from '../buttons/Button';

const MinusButton = ({ product }: MinusButtonProps) => {
  const { deleteItem } = useCartStore();

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
