import { useMemo } from 'react';
import styles from './Cart.module.css';
import { useCart } from 'contexts/cartContext/useCart';

// Static components
import ProductCardRow from 'components/elements/ProductCard/ProductCardRow';

const CartProductList = () => {
  const cart = useCart();

  const cartProductList = useMemo(
    () =>
      cart?.length > 0 ? (
        <ul className={styles.cartProductList}>
          {cart.map((product, i) => (
            <ProductCardRow key={`cart-product-${i}`} product={product} />
          ))}
        </ul>
      ) : null,
    [cart]
  );

  return cartProductList;
};
export default CartProductList;
