import { useMemo } from 'react';
import { CartCountProps } from './types';
import styles from './CartCount.module.css';
import useCartTotal from 'contexts/cartContext/useCartTotal';

// Static components
import CartIcon from 'components/images/icons/CartIcon';

const CartCount = ({ title }: CartCountProps) => {
  const { cartTotalItems } = useCartTotal();

  const computedCartCountClassName = useMemo(
    () => (cartTotalItems > 0 ? styles.notEmptyCart : styles.emptyCart),
    [cartTotalItems]
  );

  return (
    <div
      title={title}
      className={styles.cartCountContainer}
      data-test="cartCount"
    >
      <CartIcon className={styles.cartSvg} />
      <span className={computedCartCountClassName}>{cartTotalItems}</span>
    </div>
  );
};
export default CartCount;
