import ProductCard from 'components/elements/ProductCard';
import { FC, useMemo } from 'react';
import { Category, Products } from '_types/products';
import styles from '../ProductList.module.css';

interface SaladListProps {
  products: Products[];
}

const SaladList: FC<SaladListProps> = ({ products }) => {
  const filteredSaladList = useMemo(
    () => products?.filter((product) => product.category === Category.Salad),
    [products]
  );

  const saladList = useMemo(
    () =>
      filteredSaladList?.length ? (
        <ul className={styles.productList}>
          {filteredSaladList.map((product, i) => (
            <ProductCard key={`salad-key-${i}`} product={product} />
          ))}
        </ul>
      ) : null,
    [filteredSaladList]
  );

  return saladList;
};

export default SaladList;
