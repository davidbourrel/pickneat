import { useTranslations } from 'next-intl';
import styles from './CategoryList.module.css';
import Category from './Category';
import { CategoryEnum, Product } from '_types/products';

interface CategoryListProps {
  ssrProducts: Product[];
}

export default function CategoryList({ ssrProducts }: CategoryListProps) {
  const t = useTranslations('Home');

  return (
    <ul className={styles.categoryList} data-test="categoryList">
      <Category
        title={t('burgerTitle')}
        products={ssrProducts}
        category={CategoryEnum.Burger}
      />
      <Category
        title={t('sideTitle')}
        products={ssrProducts}
        category={CategoryEnum.Side}
      />
      <Category
        title={t('drinkTitle')}
        products={ssrProducts}
        category={CategoryEnum.Drink}
      />
      <Category
        title={t('dessertTitle')}
        products={ssrProducts}
        category={CategoryEnum.Dessert}
      />
      <Category
        title={t('saladTitle')}
        products={ssrProducts}
        category={CategoryEnum.Salad}
      />
    </ul>
  );
}
