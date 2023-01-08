import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import styles from './MenuCategories.module.css';
import Category from './Category';
import { CategoryEnum, Product } from '_types/products';
import { ClassNameComponentProps } from '_types/components';

interface MenuCategoriesProps extends ClassNameComponentProps {
  ssrProducts: Product[];
}

export default function MenuCategories({
  ssrProducts,
  className,
}: MenuCategoriesProps) {
  const t = useTranslations('Home');

  const computedClassName = useMemo(
    () => `${className} ${styles.menuCategories}`,
    [className]
  );

  return (
    <div className={computedClassName} data-test="menuCategories">
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
    </div>
  );
}
