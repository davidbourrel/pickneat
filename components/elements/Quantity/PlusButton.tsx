import { useCartDispatch } from 'contexts/cartContext/useCartDispatch';
import { CartStateEnum } from 'contexts/cartContext/types';
import styles from './Quantity.module.css';
import { PlusButtonProps } from './types';

// Static components
import Button from '../buttons/Button';

const PlusButton = ({ product }: PlusButtonProps) => {
  const dispatch = useCartDispatch();

  return (
    <Button
      className={styles.plus}
      headless
      onClick={() => {
        dispatch({
          type: CartStateEnum.Add,
          product: product,
        });
      }}
      absoluteLoader
    >
      <span>&#43;</span>
    </Button>
  );
};
export default PlusButton;
