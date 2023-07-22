import { useTranslations } from 'next-intl';
import styles from './MenuCategories.module.css';
import { FoodCategoryEnum } from '_types/products';
import { MenuCategoriesProps } from './types';

// Static Components
import Category from './Category';

const MenuCategories = ({ ssrProducts, className }: MenuCategoriesProps) => {
  const t = useTranslations('Home');

  const computedClassName = `${className} ${styles.menuCategories}`;

  return (
    <div className={computedClassName} data-test="menuCategories">
      <Category
        id={FoodCategoryEnum.Burger}
        title={t('burgerTitle')}
        products={ssrProducts}
        category={FoodCategoryEnum.Burger}
      />
      <Category
        id={FoodCategoryEnum.Side}
        title={t('sideTitle')}
        products={ssrProducts}
        category={FoodCategoryEnum.Side}
      />
      <Category
        id={FoodCategoryEnum.Drink}
        title={t('drinkTitle')}
        products={ssrProducts}
        category={FoodCategoryEnum.Drink}
      />
      <Category
        id={FoodCategoryEnum.Dessert}
        title={t('dessertTitle')}
        products={ssrProducts}
        category={FoodCategoryEnum.Dessert}
      />
      <Category
        id={FoodCategoryEnum.Salad}
        title={t('saladTitle')}
        products={ssrProducts}
        category={FoodCategoryEnum.Salad}
      />
    </div>
  );
};
export default MenuCategories;
