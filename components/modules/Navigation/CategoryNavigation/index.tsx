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
          <NavLink href="#burgers" isActive={activeMenuCategory === 'burgers'}>
            <Button headless tabIndex={-1}>
              {t('burgerTitle')}
            </Button>
          </NavLink>
        </li>
        <li>
          <NavLink href="#sides" isActive={activeMenuCategory === 'sides'}>
            <Button headless tabIndex={-1}>
              {t('sideTitle')}
            </Button>
          </NavLink>
        </li>
        <li>
          <NavLink href="#drinks" isActive={activeMenuCategory === 'drinks'}>
            <Button headless tabIndex={-1}>
              {t('drinkTitle')}
            </Button>
          </NavLink>
        </li>
        <li>
          <NavLink
            href="#desserts"
            isActive={activeMenuCategory === 'desserts'}
          >
            <Button headless tabIndex={-1}>
              {t('dessertTitle')}
            </Button>
          </NavLink>
        </li>
        <li>
          <NavLink href="#salads" isActive={activeMenuCategory === 'salads'}>
            <Button headless tabIndex={-1}>
              {t('saladTitle')}
            </Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
