import { FC } from 'react';
import useProducts from '../../../SWR/useProducts';
import styles from './ProductsList.module.css';
import Loader from '../../elements/Loader';
import { Category } from '_types/products';
import BurgersList from './categories/BurgersList';
import SidesList from './categories/SidesList';
import DrinksList from './categories/DrinksList';
import DessertsList from './categories/DessertsList';
import SaladsList from './categories/SaladsList';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';

const ProductsList: FC = () => {
  const { products, isProductsLoading, isProductsError } = useProducts();

  if (isProductsLoading)
    return (
      <div className={styles.productsList}>
        <Loader />
      </div>
    );
  if (isProductsError) return <div className={styles.productsList}>Error</div>;

  return (
    <ul className={styles.productsList}>
      <li>
        <div className={styles.headingContainer}>
          <Heading level={HeadingLevelEnum.Two}>{Category.Burger}</Heading>
          <span className={styles.stroke} />
        </div>
        <BurgersList products={products} />
      </li>
      <li>
        <div className={styles.headingContainer}>
          <Heading level={HeadingLevelEnum.Two}>{Category.Side}</Heading>
          <span className={styles.stroke} />
        </div>
        <SidesList products={products} />
      </li>
      <li>
        <div className={styles.headingContainer}>
          <Heading level={HeadingLevelEnum.Two}>{Category.Drink}</Heading>
          <span className={styles.stroke} />
        </div>
        <DrinksList products={products} />
      </li>
      <li>
        <div className={styles.headingContainer}>
          <Heading level={HeadingLevelEnum.Two}>{Category.Dessert}</Heading>
          <span className={styles.stroke} />
        </div>
        <DessertsList products={products} />
      </li>
      <li>
        <div className={styles.headingContainer}>
          <Heading level={HeadingLevelEnum.Two}>{Category.Salad}</Heading>
          <span className={styles.stroke} />
        </div>
        <SaladsList products={products} />
      </li>
    </ul>
  );
};

export default ProductsList;
