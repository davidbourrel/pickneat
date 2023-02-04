import { ClassNameProps } from '_types/components';
import { Product } from '_types/products';

export interface QuantityProps extends ClassNameProps {
  product: Product;
}

export type MinusButtonProps = Pick<Product, 'product_id'>;

export interface PlusButtonProps {
  product: Product;
}
