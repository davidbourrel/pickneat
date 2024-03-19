import { useTranslations } from 'next-intl';
import { AppDispatch, RootState } from 'redux/store';
import { addToCart } from '../../../redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import Button from '../buttons/Button';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';
import styles from './Quantity.module.css';
import { QuantityProps } from './types';

const Quantity = ({ product, className = '' }: QuantityProps) => {
  const { product_id, in_stock } = product;

  const t = useTranslations('Product');

  const { cart } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch<AppDispatch>();

  // Call productFromCart to get amount of this specific item
  const productFromCart = cart?.find((item) => item.product_id === product_id);

  const amount = productFromCart?.amount ? productFromCart.amount : 0;

  const computedClassName = `${styles.quantityContainer} ${className}`;

  const quantityButtons = (
    <>
      <MinusButton product={product} />
      <span className={styles.quantity}>{amount}</span>
      <PlusButton product={product} />
    </>
  );

  const addToCartButton = (
    <Button
      onClick={() => dispatch(addToCart(product))}
      className={styles.addToCartButton}>
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
