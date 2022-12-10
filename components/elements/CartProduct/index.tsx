import { Product } from '_types/products';
import styles from './CartProduct.module.css';

interface CartProductProps {
  product: Product;
}

export default function CartProduct({ product }: CartProductProps) {
  return <span className={styles.cartProduct}>{product.name}</span>;
}
