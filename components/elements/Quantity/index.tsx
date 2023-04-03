import { useTranslations } from 'next-intl';
import { CartStateEnum } from 'contexts/cartContext/types';
import { useCart, useCartDispatch } from 'contexts/cartContext/hooks';
import styles from './Quantity.module.css';
import { QuantityProps } from './types';

// Static Components
import Button from '../buttons/Button';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';

const Quantity = ({ product, className = '' }: QuantityProps) => {
  const { product_id, in_stock } = product;

  const t = useTranslations('Product');

  const { cart } = useCart();
  const { dispatch } = useCartDispatch();

  // Call productFromCart to get amount of this specific item
  const productFromCart = cart.find((item) => item.product_id === product_id);

  const amount = productFromCart?.amount ? productFromCart.amount : 0;

  const computedClassName = `${styles.quantityContainer} ${className}`;

  const handleAddToCartClick = () => {
    dispatch({
      type: CartStateEnum.Add,
      product: product,
    });
  };

  const quantityButtons = (
    <>
      <MinusButton product_id={product_id} />
      <span className={styles.quantity}>{amount}</span>
      <PlusButton product={product} />
    </>
  );

  const addToCartButton = (
    <Button onClick={handleAddToCartClick} className={styles.addToCartButton}>
      <span>&#43;</span>
      {t('addToCartTextButton')}
    </Button>
  );

  return (
    <div className={computedClassName}>
      {in_stock && amount === 0 ? addToCartButton : quantityButtons}
    </div>
  );
};
export default Quantity;
