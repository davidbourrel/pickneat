import { FC, useMemo } from 'react';
import CartIcon from 'components/images/icons/CartIcon';
import styles from './CartCount.module.css';

interface CartCountInterface {
  count?: number;
  title: string;
}
// TODO : enlever "?" à count et enlever la valeur par défaut

const CartCount: FC<CartCountInterface> = ({ count = 2, title }) => {
  const computedCartCountClassName = useMemo(
    () => (count > 0 ? styles.notEmptyCart : styles.emptyCart),
    [count]
  );

  return (
    <div title={title} className={styles.cartCountContainer}>
      <CartIcon className={styles.cartSvg} />
      <span className={computedCartCountClassName}>{count}</span>
    </div>
  );
};

export default CartCount;
