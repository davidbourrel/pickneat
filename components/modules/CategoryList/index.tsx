import { FC, useMemo } from 'react';
import useProducts from '../../../SWR/useProducts';
import styles from './CategoryList.module.css';
import Loader from '../../elements/Loader';
import useTranslation from 'hooks/useTranslation';
import home from 'public/translations/pages/home.json';
import Category from './Category';
import { CategoryEnum, Products } from '_types/products';

interface CategoryListProps {
  ssrProducts: Products[];
}

const CategoryList: FC<CategoryListProps> = ({ ssrProducts }) => {
  const { burgerTitle, sideTitle, drinkTitle, dessertTitle, saladTitle } =
    useTranslation(home);
  const { products, isProductsLoading, isProductsError } = useProducts();

  const reconciledProducts = useMemo(() => {
    if (products) {
      return products;
    }
    if (ssrProducts) {
      return ssrProducts;
    }
    return null;
  }, [ssrProducts, products]);

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
        products={reconciledProducts}
        category={CategoryEnum.Burger}
      />
      <Category
        title={sideTitle}
        products={reconciledProducts}
        category={CategoryEnum.Side}
      />
      <Category
        title={drinkTitle}
        products={reconciledProducts}
        category={CategoryEnum.Drink}
      />
      <Category
        title={dessertTitle}
        products={reconciledProducts}
        category={CategoryEnum.Dessert}
      />
      <Category
        title={saladTitle}
        products={reconciledProducts}
        category={CategoryEnum.Salad}
      />
    </ul>
  );
};

export default CategoryList;
