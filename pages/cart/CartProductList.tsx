import styles from './Cart.module.css';
import { useCart } from 'contexts/cartContext/useCart';

// Static components
import ProductCardRow from 'components/elements/ProductCard/ProductCardRow';

const CartProductList = () => {
  const cart = useCart();

  return cart?.length > 0 ? (
    <ul className={styles.cartProductList}>
      {cart.map((product, i) => (
        <ProductCardRow key={`cart-product-${i}`} product={product} />
      ))}
    </ul>
  ) : null;
};
export default CartProductList;
