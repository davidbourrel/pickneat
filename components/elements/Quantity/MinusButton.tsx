import styles from './Quantity.module.css';
import { MinusButtonProps } from './types';
import { useCartDispatch } from 'contexts/cartContext/useCartDispatch';
import { CartStateEnum } from 'contexts/cartContext/types';

// Static components
import Button from '../buttons/Button';

const MinusButton = ({ product_id }: MinusButtonProps) => {
  const dispatch = useCartDispatch();

  return (
    <Button
      className={styles.minus}
      headless
      onClick={() => {
        dispatch({
          type: CartStateEnum.DeleteItem,
          product_id: product_id,
        });
      }}
      absoluteLoader>
      <span>&#8722;</span>
    </Button>
  );
};
export default MinusButton;
