import { FC } from 'react';
import useProducts from '../../../SWR/useProducts';
import styles from './CategoryList.module.css';
import Loader from '../../elements/Loader';
import useTranslation from 'hooks/useTranslation';
import home from 'public/translations/pages/home.json';
import Category from './Category';
import { CategoryEnum } from '_types/products';

const CategoryList: FC = () => {
  const { burgerTitle, sideTitle, drinkTitle, dessertTitle, saladTitle } =
    useTranslation(home);
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
      <Category
        title={burgerTitle}
        products={products}
        category={CategoryEnum.Burger}
      />
      <Category
        title={sideTitle}
        products={products}
        category={CategoryEnum.Side}
      />
      <Category
        title={drinkTitle}
        products={products}
        category={CategoryEnum.Drink}
      />
      <Category
        title={dessertTitle}
        products={products}
        category={CategoryEnum.Dessert}
      />
      <Category
        title={saladTitle}
        products={products}
        category={CategoryEnum.Salad}
      />
    </ul>
  );
};

export default CategoryList;
