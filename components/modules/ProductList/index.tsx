import { useMemo } from 'react';
import { Maybe } from '_types/maybe';
import { CategoryEnum, Product } from '_types/products';
import styles from './ProductList.module.css';
import ProductCardCol from 'components/elements/ProductCard/ProductCardCol';

interface ProductListProps {
  products: Maybe<Product[]>;
  category: CategoryEnum;
}

export default function ProductList({ products, category }: ProductListProps) {
  const filteredProductsByCategory = useMemo(
    () => products?.filter((product) => product.category === category),
    [products, category]
  );

  const productList = useMemo(
    () =>
      filteredProductsByCategory && filteredProductsByCategory?.length > 0 ? (
        <ul className={styles.productList}>
          {filteredProductsByCategory.map((product, i) => (
            <ProductCardCol key={`burger-key-${i}`} product={product} />
          ))}
        </ul>
      ) : null,
    [filteredProductsByCategory]
  );

  return productList;
}
