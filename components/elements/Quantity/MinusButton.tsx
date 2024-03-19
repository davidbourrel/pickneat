import { AppDispatch } from 'redux/store';
import { deleteItem } from '../../../redux/cart/cartSlice';
import { useAppDispatch } from '../../../redux/hooks';
import Button from '../buttons/Button';
import styles from './Quantity.module.css';
import { MinusButtonProps } from './types';

const MinusButton = ({ product }: MinusButtonProps) => {
  const dispatch = useAppDispatch<AppDispatch>();

  return (
    <Button
      className={styles.minus}
      headless
      onClick={() => dispatch(deleteItem(product))}
      absoluteLoader>
      <span>&#8722;</span>
    </Button>
  );
};
export default MinusButton;
