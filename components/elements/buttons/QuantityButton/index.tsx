import { FC, useCallback, useMemo } from 'react';
import Button from '../Button';
import styles from './QuantityButton.module.css';
import { Products } from '_types/products';
import useRemoveCart from 'contexts/cartContext/useRemoveCart';
import useAddToCart from 'contexts/cartContext/useAddToCart ';
import useCart from 'contexts/cartContext/useCart';

interface QuantityButtonProps {
  product: Products;
}

const QuantityButton: FC<QuantityButtonProps> = ({ product }) => {
  const { product_id } = product;
  const { cart } = useCart();
  const addToCart = useAddToCart();
  const { removeFromCart } = useRemoveCart();

  // Call productFromCart to get amount of this specific item
  const productFromCart = useMemo(
    () => cart.find((item) => item.product_id === product_id),
    [cart, product_id]
  );

  const quantity = useMemo(
    () => (productFromCart?.amount ? productFromCart.amount : 0),
    [productFromCart?.amount]
  );

  const handleRemoveProductClick = useCallback(
    () => removeFromCart(product_id),
    [removeFromCart, product_id]
  );

  const handleAddProductClick = useCallback(
    () => addToCart(product),
    [addToCart, product]
  );

  return (
    <div className={styles.quantityContainer}>
      <Button
        className={styles.minus}
        headless
        onClick={handleRemoveProductClick}
      >
        <span>&#8722;</span>
      </Button>
      <span className={styles.quantity}>{quantity}</span>
      <Button className={styles.plus} headless onClick={handleAddProductClick}>
        <span>&#43;</span>
      </Button>
    </div>
  );
};

export default QuantityButton;
