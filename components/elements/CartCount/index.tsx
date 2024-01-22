import CartIcon from 'components/images/icons/CartIcon';
import { useCartTotalItems } from 'stores/useCartStore';
import styles from './CartCount.module.css';
import { CartCountProps } from './types';

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
