import { useTranslations } from 'next-intl';
import styles from './CategoryNavigation.module.css';
import useActiveMenuCategories from 'contexts/appContext/useActiveMenuCategories';

// Static Components
import Button from 'components/elements/buttons/Button';
import NavLink from 'components/elements/NavLink';

export default function CategoryNavigation() {
  const t = useTranslations('Home');

  const activeMenuCategory = useActiveMenuCategories();

  return (
    <nav className={styles.navigation}>
      <ul tabIndex={-1}>
        <li>
          <NavLink
            href="#burgers"
            tabIndex={-1}
            isActive={activeMenuCategory === 'burgers'}
          >
            <Button headless>{t('burgerTitle')}</Button>
          </NavLink>
        </li>
        <li>
          <NavLink
            href="#sides"
            tabIndex={-1}
            isActive={activeMenuCategory === 'sides'}
          >
            <Button headless>{t('sideTitle')}</Button>
          </NavLink>
        </li>
        <li>
          <NavLink
            href="#drinks"
            tabIndex={-1}
            isActive={activeMenuCategory === 'drinks'}
          >
            <Button headless>{t('drinkTitle')}</Button>
          </NavLink>
        </li>
        <li>
          <NavLink
            href="#desserts"
            tabIndex={-1}
            isActive={activeMenuCategory === 'desserts'}
          >
            <Button headless>{t('dessertTitle')}</Button>
          </NavLink>
        </li>
        <li>
          <NavLink
            href="#salads"
            tabIndex={-1}
            isActive={activeMenuCategory === 'salads'}
          >
            <Button headless>{t('saladTitle')}</Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
