import { AppDispatch } from 'redux/store';
import { addToCart } from '../../../redux/cart/cartSlice';
import { useAppDispatch } from '../../../redux/hooks';
import Button from '../buttons/Button';
import styles from './Quantity.module.css';
import { PlusButtonProps } from './types';

const PlusButton = ({ product }: PlusButtonProps) => {
  const dispatch = useAppDispatch<AppDispatch>();

  return (
    <Button
      className={styles.plus}
      headless
      onClick={() => dispatch(addToCart(product))}
      absoluteLoader>
      <span>&#43;</span>
    </Button>
  );
};
export default PlusButton;
