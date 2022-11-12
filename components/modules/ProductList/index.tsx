import { FC } from 'react';
import useProducts from '../../../SWR/useProducts';
import styles from './ProductList.module.css';
import Loader from '../../elements/Loader';
import BurgerList from './categories/BurgerList';
import SideList from './categories/SideList';
import DrinkList from './categories/DrinkList';
import DessertList from './categories/DessertList';
import SaladList from './categories/SaladList';
import useTranslation from 'hooks/useTranslation';
import home from 'public/translations/pages/home.json';
import ProductItem from './ProductItem';

const ProductList: FC = () => {
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
      <ProductItem title={burgerTitle}>
        <BurgerList products={products} />
      </ProductItem>
      <ProductItem title={sideTitle}>
        <SideList products={products} />
      </ProductItem>
      <ProductItem title={drinkTitle}>
        <DrinkList products={products} />
      </ProductItem>
      <ProductItem title={dessertTitle}>
        <DessertList products={products} />
      </ProductItem>
      <ProductItem title={saladTitle}>
        <SaladList products={products} />
      </ProductItem>
    </ul>
  );
};

export default ProductList;
