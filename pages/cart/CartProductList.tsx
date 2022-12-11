import styles from './Cart.module.css';
import useCart from 'contexts/cartContext/useCart';
import CartProduct from 'components/elements/CartProduct';

export default function CartProductList() {
  const { cart } = useCart();

  return cart?.length > 0 ? (
    <ul className={styles.cartProductList}>
      {cart.map((product, i) => (
        <CartProduct key={`cart-product-${i}`} product={product} />
      ))}
    </ul>
  ) : null;
}