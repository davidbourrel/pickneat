import { FC, useMemo } from 'react';
import ProductCard from 'components/elements/ProductCard';
import { Category, Products } from '_types/products';
import styles from '../ProductList.module.css';

interface SideListProps {
  products: Products[];
}

const SideList: FC<SideListProps> = ({ products }) => {
  const filteredSideList = useMemo(
    () => products?.filter((product) => product.category === Category.Side),
    [products]
  );

  const sideList = useMemo(
    () =>
      filteredSideList?.length ? (
        <ul className={styles.productList}>
          {filteredSideList.map((product, i) => (
            <ProductCard key={`side-key-${i}`} product={product} />
          ))}
        </ul>
      ) : null,
    [filteredSideList]
  );

  return sideList;
};

export default SideList;
