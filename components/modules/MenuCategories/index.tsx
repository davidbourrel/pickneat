import { useTranslations } from 'next-intl';
import styles from './MenuCategories.module.css';
import { FoodCategoryEnum } from '_types/products';
import { MenuCategoriesProps } from './types';

// Static Components
import Category from './Category';

const MenuCategories = ({
  ssrProducts,
  setIntersectionObserverEntries,
  className,
}: MenuCategoriesProps) => {
  const t = useTranslations('Home');

  const computedClassName = `${className} ${styles.menuCategories}`;

  return (
    <div className={computedClassName} data-test="menuCategories">
      <Category
        id="burgers"
        title={t('burgerTitle')}
        products={ssrProducts}
        category={FoodCategoryEnum.Burger}
        setIntersectionObserverEntries={setIntersectionObserverEntries}
      />
      <Category
        id="sides"
        title={t('sideTitle')}
        products={ssrProducts}
        category={FoodCategoryEnum.Side}
        setIntersectionObserverEntries={setIntersectionObserverEntries}
      />
      <Category
        id="drinks"
        title={t('drinkTitle')}
        products={ssrProducts}
        category={FoodCategoryEnum.Drink}
        setIntersectionObserverEntries={setIntersectionObserverEntries}
      />
      <Category
        id="desserts"
        title={t('dessertTitle')}
        products={ssrProducts}
        category={FoodCategoryEnum.Dessert}
        setIntersectionObserverEntries={setIntersectionObserverEntries}
      />
      <Category
        id="salads"
        title={t('saladTitle')}
        products={ssrProducts}
        category={FoodCategoryEnum.Salad}
        setIntersectionObserverEntries={setIntersectionObserverEntries}
      />
    </div>
  );
};
export default MenuCategories;
