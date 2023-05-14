import { useTranslations } from 'next-intl';
import styles from './CategoryNavigation.module.css';
import { getMostVisibleEntry } from 'utils/getMostVisibleEntry';
import { useActiveCategoryStore } from 'stores/useActiveCategoryStore';

// Static Components
import CategoryNavigationItem from './CategoryNavigationItem';

const CategoryNavigation = () => {
  const t = useTranslations('Home');

  const { entries } = useActiveCategoryStore();

  const activeCategoryEntry = getMostVisibleEntry(entries);

  const activeMenuCategory = activeCategoryEntry?.target?.id;

  return (
    <nav className={styles.navigation}>
      <ol tabIndex={-1}>
        <CategoryNavigationItem
          id="#burgers"
          isActive={activeMenuCategory === 'burgers'}>
          {t('burgerTitle')}
        </CategoryNavigationItem>
        <CategoryNavigationItem
          id="#sides"
          isActive={activeMenuCategory === 'sides'}>
          {t('sideTitle')}
        </CategoryNavigationItem>
        <CategoryNavigationItem
          id="#drinks"
          isActive={activeMenuCategory === 'drinks'}>
          {t('drinkTitle')}
        </CategoryNavigationItem>
        <CategoryNavigationItem
          id="#desserts"
          isActive={activeMenuCategory === 'desserts'}>
          {t('dessertTitle')}
        </CategoryNavigationItem>
        <CategoryNavigationItem
          id="#salads"
          isActive={activeMenuCategory === 'salads'}>
          {t('saladTitle')}
        </CategoryNavigationItem>
      </ol>
    </nav>
  );
};
export default CategoryNavigation;
