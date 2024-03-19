import CartIcon from 'components/images/icons/CartIcon';
import { RootState } from 'redux/store';
import { useAppSelector } from '../../../redux/hooks';
import styles from './CartCount.module.css';
import { CartCountProps } from './types';

const CartCount = ({ title }: CartCountProps) => {
  const { cartTotalItems } = useAppSelector((state: RootState) => state?.cart);

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
