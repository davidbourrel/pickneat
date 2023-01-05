import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import styles from './CategoryList.module.css';
import Category from './Category';
import { CategoryEnum, Product } from '_types/products';
import { ClassNameComponentProps } from '_types/components';

interface CategoryListProps extends ClassNameComponentProps {
  ssrProducts: Product[];
}

export default function CategoryList({
  ssrProducts,
  className,
}: CategoryListProps) {
  const t = useTranslations('Home');

  const computedClassName = useMemo(
    () => `${className} ${styles.categoryList}`,
    [className]
  );

  return (
    <ul className={computedClassName} data-test="categoryList">
      <Category
        id="burgerTitle"
        title={t('burgerTitle')}
        products={ssrProducts}
        category={CategoryEnum.Burger}
      />
      <Category
        id="sideTitle"
        title={t('sideTitle')}
        products={ssrProducts}
        category={CategoryEnum.Side}
      />
      <Category
        id="drinkTitle"
        title={t('drinkTitle')}
        products={ssrProducts}
        category={CategoryEnum.Drink}
      />
      <Category
        id="dessertTitle"
        title={t('dessertTitle')}
        products={ssrProducts}
        category={CategoryEnum.Dessert}
      />
      <Category
        id="saladTitle"
        title={t('saladTitle')}
        products={ssrProducts}
        category={CategoryEnum.Salad}
      />
    </ul>
  );
}
