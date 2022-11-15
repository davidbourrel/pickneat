import ProductCard from 'components/elements/ProductCard';
import { FC, useMemo } from 'react';
import { Maybe } from '_types/maybe';
import { CategoryEnum, Products } from '_types/products';
import styles from './ProductList.module.css';

interface ProductListProps {
  products: Maybe<Products[]>;
  category: CategoryEnum;
}

const ProductList: FC<ProductListProps> = ({ products, category }) => {
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
};

export default ProductList;
