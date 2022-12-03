import { FC, useMemo } from 'react';
import useProducts from '../../../SWR/useProducts';
import styles from './CategoryList.module.css';
import Loader from '../../elements/Loader';
import Category from './Category';
import { CategoryEnum, Products } from '_types/products';
import { useTranslations } from 'next-intl';
import { GetStaticProps } from 'next/types';

interface CategoryListProps {
  ssrProducts: Products[];
}

const CategoryList: FC<CategoryListProps> = ({ ssrProducts }) => {
  const t = useTranslations('Home');

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
    <ul className={styles.categoryList} data-test="categoryList">
      <Category
        title={t('burgerTitle')}
        products={reconciledProducts}
        category={CategoryEnum.Burger}
      />
      <Category
        title={t('sideTitle')}
        products={reconciledProducts}
        category={CategoryEnum.Side}
      />
      <Category
        title={t('drinkTitle')}
        products={reconciledProducts}
        category={CategoryEnum.Drink}
      />
      <Category
        title={t('dessertTitle')}
        products={reconciledProducts}
        category={CategoryEnum.Dessert}
      />
      <Category
        title={t('saladTitle')}
        products={reconciledProducts}
        category={CategoryEnum.Salad}
      />
    </ul>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  };
};

export default CategoryList;
