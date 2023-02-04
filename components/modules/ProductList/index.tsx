import { useMemo } from 'react';
import styles from './ProductList.module.css';
import { ProductListProps } from './types';

// Static components
import ProductCardCol from 'components/elements/ProductCard/ProductCardCol';

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
