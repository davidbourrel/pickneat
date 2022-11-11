import { FC, useMemo } from 'react';
import ProductCard from 'components/elements/ProductCard';
import { Category, Products } from '_types/products';
import styles from '../ProductList.module.css';

interface DessertListProps {
  products: Products[];
}

const DessertList: FC<DessertListProps> = ({ products }) => {
  const filteredDessertList = useMemo(
    () => products?.filter((product) => product.category === Category.Dessert),
    [products]
  );

  const dessertList = useMemo(
    () =>
      filteredDessertList?.length ? (
        <ul className={styles.productList}>
          {filteredDessertList.map((product, i) => (
            <ProductCard key={`dessert-key-${i}`} product={product} />
          ))}
        </ul>
      ) : null,
    [filteredDessertList]
  );

  return dessertList;
};

export default DessertList;
