import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import styles from './MenuCategories.module.css';
import { FoodCategoryEnum } from '_types/products';
import { MenuCategoriesProps } from './types';

// Static Components
import Category from './Category';

const MenuCategories = ({ ssrProducts, className }: MenuCategoriesProps) => {
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
        category={FoodCategoryEnum.Burger}
      />
      <Category
        id="sides"
        title={t('sideTitle')}
        products={ssrProducts}
        category={FoodCategoryEnum.Side}
      />
      <Category
        id="drinks"
        title={t('drinkTitle')}
        products={ssrProducts}
        category={FoodCategoryEnum.Drink}
      />
      <Category
        id="desserts"
        title={t('dessertTitle')}
        products={ssrProducts}
        category={FoodCategoryEnum.Dessert}
      />
      <Category
        id="salads"
        title={t('saladTitle')}
        products={ssrProducts}
        category={FoodCategoryEnum.Salad}
      />
    </div>
  );
};
export default MenuCategories;
