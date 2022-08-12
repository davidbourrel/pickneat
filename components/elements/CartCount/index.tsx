import { FC, useMemo } from 'react';
import CartIcon from 'components/images/icons/CartIcon';
import styles from './CartCount.module.css';

interface CartCountInterface {
  count?: number;
}
// TODO : enlever "?" à count et enlever la valeur par défaut

const CartCount: FC<CartCountInterface> = ({ count = 2 }) => {
  const computedCartCountClassName = useMemo(
    () => (count > 0 ? styles.notEmptyCart : styles.emptyCart),
    [count]
  );

  return (
    <div className={styles.cartCountContainer}>
      <CartIcon className={styles.cartSvg} />
      <span className={computedCartCountClassName}>{count}</span>
    </div>
  );
};

export default CartCount;
