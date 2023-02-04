import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import styles from './MenuCategories.module.css';
import { CategoryEnum } from '_types/products';
import { MenuCategoriesProps } from './types';

// Static Components
import Category from './Category';

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
        id="burgers"
        title={t('burgerTitle')}
        products={ssrProducts}
        category={CategoryEnum.Burger}
      />
      <Category
        id="sides"
        title={t('sideTitle')}
        products={ssrProducts}
        category={CategoryEnum.Side}
      />
      <Category
        id="drinks"
        title={t('drinkTitle')}
        products={ssrProducts}
        category={CategoryEnum.Drink}
      />
      <Category
        id="desserts"
        title={t('dessertTitle')}
        products={ssrProducts}
        category={CategoryEnum.Dessert}
      />
      <Category
        id="salads"
        title={t('saladTitle')}
        products={ssrProducts}
        category={CategoryEnum.Salad}
      />
    </div>
  );
}
