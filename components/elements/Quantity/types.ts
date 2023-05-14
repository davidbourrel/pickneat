import { ClassNameProps } from '_types/components';
import { Product } from '_types/products';

export interface QuantityProps extends ClassNameProps {
  product: Product;
}

export interface MinusButtonProps {
  product: Product;
}

export interface PlusButtonProps {
  product: Product;
}
