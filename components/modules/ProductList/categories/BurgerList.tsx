import { FC, useMemo } from 'react';
import ProductCard from 'components/elements/ProductCard';
import { Category, Products } from '_types/products';
import styles from '../ProductList.module.css';

interface BurgerListProps {
  products: Products[];
}

const BurgerList: FC<BurgerListProps> = ({ products }) => {
  const filteredBurgerList = useMemo(
    () => products?.filter((product) => product.category === Category.Burger),
    [products]
  );

  const burgerList = useMemo(
    () =>
      filteredBurgerList?.length ? (
        <ul className={styles.productList}>
          {filteredBurgerList.map((product, i) => (
            <ProductCard key={`burger-key-${i}`} product={product} />
          ))}
        </ul>
      ) : null,
    [filteredBurgerList]
  );

  return burgerList;
};

export default BurgerList;
