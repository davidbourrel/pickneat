import { FC, useMemo } from 'react';
import ProductCard from 'components/elements/ProductCard';
import { Category, Products } from '_types/products';
import styles from '../ProductsList.module.css';

interface DrinksListProps {
  products: Products[];
}

const DrinksList: FC<DrinksListProps> = ({ products }) => {
  const filteredDrinksList = useMemo(
    () => products?.filter((product) => product.category === Category.Drink),
    [products]
  );

  const drinksList = useMemo(
    () =>
      filteredDrinksList?.length ? (
        <ul className={styles.categoryList}>
          {filteredDrinksList.map((product, i) => (
            <ProductCard key={`drink-key-${i}`} product={product} />
          ))}
        </ul>
      ) : null,
    [filteredDrinksList]
  );

  return drinksList;
};

export default DrinksList;
