import useFromStore from 'hooks/useFromStore';
import { useTranslations } from 'next-intl';
import { useCartStore } from 'stores/useCartStore';
import Button from '../buttons/Button';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';
import styles from './Quantity.module.css';
import { QuantityProps } from './types';

const Quantity = ({ product, className = '' }: QuantityProps) => {
  const { product_id, in_stock } = product;

  const t = useTranslations('Product');

  const addItem = useCartStore((state) => state.addItem);
  const cart = useFromStore(useCartStore, (state) => state.cart);
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
    <Button onClick={() => addItem(product)} className={styles.addToCartButton}>
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
