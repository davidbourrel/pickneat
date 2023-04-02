import { useTranslations } from 'next-intl';
import styles from './CategoryNavigation.module.css';
import { useActiveMenuCategories } from 'contexts/appContext/useActiveMenuCategories';

// Static Components
import CategoryNavigationItem from './CategoryNavigationItem';

const CategoryNavigation = () => {
  const t = useTranslations('Home');

  const activeMenuCategory = useActiveMenuCategories();

  return (
    <nav className={styles.navigation}>
      <ul tabIndex={-1}>
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
      </ul>
    </nav>
  );
};
export default CategoryNavigation;
