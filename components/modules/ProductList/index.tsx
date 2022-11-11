import { FC } from 'react';
import useProducts from '../../../SWR/useProducts';
import styles from './ProductList.module.css';
import Loader from '../../elements/Loader';
import { Category } from '_types/products';
import BurgerList from './categories/BurgerList';
import SideList from './categories/SideList';
import DrinkList from './categories/DrinkList';
import DessertList from './categories/DessertList';
import SaladList from './categories/SaladList';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';

const ProductList: FC = () => {
  const { products, isProductsLoading, isProductsError } = useProducts();

  if (isProductsLoading)
    return (
      <div className={styles.categoryList}>
        <Loader />
      </div>
    );
  if (isProductsError) return <div className={styles.categoryList}>Error</div>;

  return (
    <ul className={styles.categoryList}>
      <li>
        <div className={styles.headingContainer}>
          <Heading level={HeadingLevelEnum.Two}>{Category.Burger}</Heading>
          <span className={styles.stroke} />
        </div>
        <BurgerList products={products} />
      </li>
      <li>
        <div className={styles.headingContainer}>
          <Heading level={HeadingLevelEnum.Two}>{Category.Side}</Heading>
          <span className={styles.stroke} />
        </div>
        <SideList products={products} />
      </li>
      <li>
        <div className={styles.headingContainer}>
          <Heading level={HeadingLevelEnum.Two}>{Category.Drink}</Heading>
          <span className={styles.stroke} />
        </div>
        <DrinkList products={products} />
      </li>
      <li>
        <div className={styles.headingContainer}>
          <Heading level={HeadingLevelEnum.Two}>{Category.Dessert}</Heading>
          <span className={styles.stroke} />
        </div>
        <DessertList products={products} />
      </li>
      <li>
        <div className={styles.headingContainer}>
          <Heading level={HeadingLevelEnum.Two}>{Category.Salad}</Heading>
          <span className={styles.stroke} />
        </div>
        <SaladList products={products} />
      </li>
    </ul>
  );
};

export default ProductList;
