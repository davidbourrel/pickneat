import { FC } from 'react';
import useProducts from '../../../SWR/useProducts';
import styles from './ProductsList.module.css';
import Loader from '../../elements/Loader';
import { Category } from '_types/products';
import Headings from 'components/elements/Headings';
import { HeadingsLevelEnum } from 'components/elements/Headings/types';
import BurgersList from './categories/BurgersList';
import SidesList from './categories/SidesList';
import DrinksList from './categories/DrinksList';
import DessertsList from './categories/DessertsList';
import SaladsList from './categories/SaladsList';

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
        <Headings level={HeadingsLevelEnum.Two}>{Category.Burger}</Headings>
        <BurgersList products={products} />
      </li>
      <li>
        <Headings level={HeadingsLevelEnum.Two}>{Category.Side}</Headings>
        <SidesList products={products} />
      </li>
      <li>
        <Headings level={HeadingsLevelEnum.Two}>{Category.Drink}</Headings>
        <DrinksList products={products} />
      </li>
      <li>
        <Headings level={HeadingsLevelEnum.Two}>{Category.Dessert}</Headings>
        <DessertsList products={products} />
      </li>
      <li>
        <Headings level={HeadingsLevelEnum.Two}>{Category.Salad}</Headings>
        <SaladsList products={products} />
      </li>
    </ul>
  );
};

export default ProductsList;
