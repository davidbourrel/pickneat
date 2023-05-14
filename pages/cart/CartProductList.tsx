import { useCartStore } from 'stores/useCartStore';
import styles from './Cart.module.css';
import useFromStore from 'hooks/useFromStore';

// Static components
import ProductCardRow from 'components/elements/ProductCard/ProductCardRow';

const CartProductList = () => {
  const cart = useFromStore(useCartStore, (state) => state.cart);

  return !!cart && cart.length > 0 ? (
    <ul className={styles.cartProductList}>
      {cart.map((product, i) => (
        <ProductCardRow key={`cart-product-${i}`} product={product} />
      ))}
    </ul>
  ) : null;
};
export default CartProductList;
