import { ClassNameProps } from '_types/components';
import { Product } from '_types/products';

export interface PriceTagProps extends ClassNameProps, Pick<Product, 'price'> {}
