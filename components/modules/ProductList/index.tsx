import { useMemo } from 'react';
import { Maybe } from '_types/maybe';
import ProductCard from 'components/elements/ProductCard';
import { CategoryEnum, Product } from '_types/products';
import styles from './ProductList.module.css';

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
      filteredProductsByCategory?.length ? (
        <ul className={styles.productList}>
          {filteredProductsByCategory.map((product, i) => (
            <ProductCard key={`burger-key-${i}`} product={product} />
          ))}
        </ul>
      ) : null,
    [filteredProductsByCategory]
  );

  return productList;
}
