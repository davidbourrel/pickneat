import { FC, useCallback, useMemo } from 'react';
import Button from '../buttons/Button';
import styles from './ProductCard.module.css';
import { Products } from '_types/products';
import useCart from 'contexts/cartContext/useCart';
import MinusButton from '../buttons/PlusMinusButtons/MinusButton';
import PlusButton from '../buttons/PlusMinusButtons/PlusButton';
import useAddToCart from 'contexts/cartContext/useAddToCart ';
import useTranslation from 'hooks/useTranslation';
import transCart from 'public/translations/pages/cart.json';

interface QuantityProps {
  product: Products;
}

const Quantity: FC<QuantityProps> = ({ product }) => {
  const { product_id } = product;

  const { addToCartTextButton } = useTranslation(transCart);
  const { cart } = useCart();
  const addToCart = useAddToCart();

  const handleAddProductClick = useCallback(
    () => addToCart(product),
    [addToCart, product]
  );

  // Call productFromCart to get amount of this specific item
  const productFromCart = useMemo(
    () => cart.find((item) => item.product_id === product_id),
    [cart, product_id]
  );

  const amount = useMemo(
    () => (productFromCart?.amount ? productFromCart.amount : 0),
    [productFromCart?.amount]
  );

  const minusButton = useMemo(
    () => (amount > 0 ? <MinusButton productId={product_id} /> : null),
    [amount, product_id]
  );

  const quantity = useMemo(
    () =>
      amount === 0 ? (
        <Button
          onClick={handleAddProductClick}
          className={styles.addToCartButton}
        >
          {addToCartTextButton}
        </Button>
      ) : (
        <span className={styles.quantity}>{amount}</span>
      ),
    [amount, handleAddProductClick, addToCartTextButton]
  );

  const plusButton = useMemo(
    () => (amount > 0 ? <PlusButton product={product} /> : null),
    [amount, product]
  );

  return (
    <div className={styles.quantityContainer}>
      {minusButton}
      {quantity}
      {plusButton}
    </div>
  );
};

export default Quantity;
