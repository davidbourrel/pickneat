import { FoodCategoryEnum } from '_types/products';
import { useTranslations } from 'next-intl';
import { RootState } from 'redux/store';
import { getMostVisibleEntry } from 'utils/getMostVisibleEntry';
import { useAppSelector } from '../../../../redux/hooks';
import styles from './CategoryNavigation.module.css';
import CategoryNavigationItem from './CategoryNavigationItem';

const CategoryNavigation = () => {
  const t = useTranslations('Home');

  const { entries } = useAppSelector(
    (state: RootState) => state.activeCategory
  );

  const activeCategoryEntry = getMostVisibleEntry(entries);

  const activeMenuCategory = activeCategoryEntry?.target?.id;

  return (
    <nav className={styles.navigation}>
      <ol tabIndex={-1}>
        <CategoryNavigationItem
          id={`#${FoodCategoryEnum.Burger}`}
          isActive={activeMenuCategory === FoodCategoryEnum.Burger}>
          {t('burgerTitle')}
        </CategoryNavigationItem>
        <CategoryNavigationItem
          id={`#${FoodCategoryEnum.Side}`}
          isActive={activeMenuCategory === FoodCategoryEnum.Side}>
          {t('sideTitle')}
        </CategoryNavigationItem>
        <CategoryNavigationItem
          id={`#${FoodCategoryEnum.Drink}`}
          isActive={activeMenuCategory === FoodCategoryEnum.Drink}>
          {t('drinkTitle')}
        </CategoryNavigationItem>
        <CategoryNavigationItem
          id={`#${FoodCategoryEnum.Dessert}`}
          isActive={activeMenuCategory === FoodCategoryEnum.Dessert}>
          {t('dessertTitle')}
        </CategoryNavigationItem>
        <CategoryNavigationItem
          id={`#${FoodCategoryEnum.Salad}`}
          isActive={activeMenuCategory === FoodCategoryEnum.Salad}>
          {t('saladTitle')}
        </CategoryNavigationItem>
      </ol>
    </nav>
  );
};
export default CategoryNavigation;
