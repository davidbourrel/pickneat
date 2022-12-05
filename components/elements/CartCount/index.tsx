import { useMemo } from 'react';
import CartIcon from 'components/images/icons/CartIcon';
import styles from './CartCount.module.css';
import useCartTotal from 'contexts/cartContext/useCartTotal';

interface CartCountInterface {
  title: string;
}

export default function CartCount({ title }: CartCountInterface) {
  const { cartTotalItems } = useCartTotal();

  const computedCartCountClassName = useMemo(
    () => (cartTotalItems > 0 ? styles.notEmptyCart : styles.emptyCart),
    [cartTotalItems]
  );

  return (
    <div title={title} className={styles.cartCountContainer}>
      <CartIcon className={styles.cartSvg} />
      <span className={computedCartCountClassName}>{cartTotalItems}</span>
    </div>
  );
}
