import ProductCard from 'components/elements/ProductCard';
import { FC, useMemo } from 'react';
import { Category, Products } from '_types/products';
import styles from '../ProductsList.module.css';

interface SaladsListProps {
  products: Products[];
}

const SaladsList: FC<SaladsListProps> = ({ products }) => {
  const filteredSaladsList = useMemo(
    () => products?.filter((product) => product.category === Category.Salad),
    [products]
  );

  const saladsList = useMemo(
    () =>
      filteredSaladsList?.length ? (
        <ul className={styles.categoryList}>
          {filteredSaladsList.map((product, i) => (
            <ProductCard key={`salad-key-${i}`} product={product} />
          ))}
        </ul>
      ) : null,
    [filteredSaladsList]
  );

  return saladsList;
};

export default SaladsList;
