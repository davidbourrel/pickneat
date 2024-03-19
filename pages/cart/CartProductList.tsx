import ProductCardRow from 'components/elements/ProductCard/ProductCardRow';
import { RootState } from 'redux/store';
import { useAppSelector } from '../../redux/hooks';
import styles from './Cart.module.css';

const CartProductList = () => {
  const { cart } = useAppSelector((state: RootState) => state.cart);

  return !!cart && cart.length > 0 ? (
    <ul className={styles.cartProductList}>
      {cart.map((product, i) => (
        <ProductCardRow key={`cart-product-${i}`} product={product} />
      ))}
    </ul>
  ) : null;
};
export default CartProductList;
