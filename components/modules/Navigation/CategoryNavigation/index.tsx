import Button from 'components/elements/buttons/Button';
import Link from 'components/elements/Link';
import { useTranslations } from 'next-intl';
import styles from './CategoryNavigation.module.css';

export default function CategoryNavigation() {
  const t = useTranslations('Home');

  return (
    <nav className={styles.navigation}>
      <ul tabIndex={-1}>
        <li>
          <Link href="#burgerTitle" tabIndex={-1}>
            <Button headless>{t('burgerTitle')}</Button>
          </Link>
        </li>
        <li>
          <Link href="#sideTitle" tabIndex={-1}>
            <Button headless>{t('sideTitle')}</Button>
          </Link>
        </li>
        <li>
          <Link href="#drinkTitle" tabIndex={-1}>
            <Button headless>{t('drinkTitle')}</Button>
          </Link>
        </li>
        <li>
          <Link href="#dessertTitle" tabIndex={-1}>
            <Button headless>{t('dessertTitle')}</Button>
          </Link>
        </li>
        <li>
          <Link href="#saladTitle" tabIndex={-1}>
            <Button headless>{t('saladTitle')}</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
