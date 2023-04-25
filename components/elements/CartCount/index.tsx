import { CartCountProps } from './types';
import styles from './CartCount.module.css';
import { useCartTotalItems } from 'contexts/cartContext/hooks';

// Static components
import CartIcon from 'components/images/icons/CartIcon';

const CartCount = ({ title }: CartCountProps) => {
  const cartTotalItems = useCartTotalItems();

  const computedCartCountClassName =
    cartTotalItems > 0 ? styles.notEmptyCart : styles.emptyCart;

  return (
    <div
      title={title}
      className={styles.cartCountContainer}
      data-test="cartCount">
      <CartIcon className={styles.cartSvg} />
      <span className={computedCartCountClassName}>{cartTotalItems}</span>
    </div>
  );
};
export default CartCount;
