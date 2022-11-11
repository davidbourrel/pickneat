import { FC, useMemo } from 'react';
import ProductCard from 'components/elements/ProductCard';
import { Category, Products } from '_types/products';
import styles from '../ProductList.module.css';

interface DrinkListProps {
  products: Products[];
}

const DrinkList: FC<DrinkListProps> = ({ products }) => {
  const filteredDrinkList = useMemo(
    () => products?.filter((product) => product.category === Category.Drink),
    [products]
  );

  const drinkList = useMemo(
    () =>
      filteredDrinkList?.length ? (
        <ul className={styles.productList}>
          {filteredDrinkList.map((product, i) => (
            <ProductCard key={`drink-key-${i}`} product={product} />
          ))}
        </ul>
      ) : null,
    [filteredDrinkList]
  );

  return drinkList;
};

export default DrinkList;
