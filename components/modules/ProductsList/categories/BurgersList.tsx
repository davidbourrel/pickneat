import { FC, useMemo } from 'react';
import ProductCard from 'components/elements/ProductCard';
import { Category, Products } from '_types/products';
import styles from '../ProductsList.module.css';

interface BurgersListProps {
  products: Products[];
}

const BurgersList: FC<BurgersListProps> = ({ products }) => {
  const filteredBurgersList = useMemo(
    () => products?.filter((product) => product.category === Category.Burger),
    [products]
  );

  const burgersList = useMemo(
    () =>
      filteredBurgersList?.length ? (
        <ul className={styles.categoryList}>
          {filteredBurgersList.map((product, i) => (
            <ProductCard key={`burger-key-${i}`} product={product} />
          ))}
        </ul>
      ) : null,
    [filteredBurgersList]
  );

  return burgersList;
};

export default BurgersList;
