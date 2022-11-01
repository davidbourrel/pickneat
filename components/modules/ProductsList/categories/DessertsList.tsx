import { FC, useMemo } from 'react';
import ProductCard from 'components/elements/ProductCard';
import { Category, Products } from '_types/products';
import styles from '../ProductsList.module.css';

interface DessertsListProps {
  products: Products[];
}

const DessertsList: FC<DessertsListProps> = ({ products }) => {
  const filteredDesseertsList = useMemo(
    () => products?.filter((product) => product.category === Category.Dessert),
    [products]
  );

  const dessertsList = useMemo(
    () =>
      filteredDesseertsList?.length ? (
        <ul className={styles.categoryList}>
          {filteredDesseertsList.map((product, i) => (
            <ProductCard key={`dessert-key-${i}`} product={product} />
          ))}
        </ul>
      ) : null,
    [filteredDesseertsList]
  );

  return dessertsList;
};

export default DessertsList;
