import { FC, useMemo } from 'react';
import ProductCard from 'components/elements/ProductCard';
import { Category, Products } from '_types/products';
import styles from '../ProductsList.module.css';

interface SidesListProps {
  products: Products[];
}

const SidesList: FC<SidesListProps> = ({ products }) => {
  const filteredSidesList = useMemo(
    () => products?.filter((product) => product.category === Category.Side),
    [products]
  );

  const sidesList = useMemo(
    () =>
      filteredSidesList?.length ? (
        <ul className={styles.categoryList}>
          {filteredSidesList.map((product, i) => (
            <ProductCard key={`side-key-${i}`} product={product} />
          ))}
        </ul>
      ) : null,
    [filteredSidesList]
  );

  return sidesList;
};

export default SidesList;
