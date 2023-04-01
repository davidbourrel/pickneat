import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import styles from './DesktopNavigation.module.css';
import { useUser } from '@auth0/nextjs-auth0/client';

// Static Components
import NavLink from 'components/elements/NavLink';
import LanguageSwitcher from 'components/elements/LanguageSwitcher';
import ThemeSwitcher from 'components/elements/ThemeSwitcher';
import CartCount from 'components/elements/CartCount';
import ProfileIcon from 'components/elements/ProfileIcon';
import Button from 'components/elements/buttons/Button';
import Link from 'components/elements/Link';

const DesktopNavigation = () => {
  const { pathname } = useRouter();
  const { user } = useUser();

  const t = useTranslations('Navigation');

  const userTab =
    user && user.picture ? (
      <li title={t('profile')} data-test="profileIcon">
        <Link href="/profile">
          <ProfileIcon />
        </Link>
      </li>
    ) : (
      <li title={t('login')} data-test="profileIcon">
        <Link href="/api/auth/login" tabIndex={-1}>
          <Button>{t('login')}</Button>
        </Link>
      </li>
    );

  return (
    <nav
      className={styles.nav}
      aria-label="desktop navigation"
      data-test="desktopNavigation"
    >
      <ul className={styles.navLinkList}>
        <li title={t('menuTitle')} className={styles.navItem}>
          <NavLink href="/" isActive={pathname === '/'}>
            {t('menu')}
          </NavLink>
        </li>
        <li title={t('restaurantsTitle')} className={styles.navItem}>
          <NavLink href="/restaurants" isActive={pathname === '/restaurants'}>
            {t('restaurants')}
          </NavLink>
        </li>
        <li title={t('deliveryTitle')} className={styles.navItem}>
          <NavLink href="/delivery" isActive={pathname === '/delivery'}>
            {t('delivery')}
          </NavLink>
        </li>
      </ul>

      <ul className={styles.navLinkList}>
        <li>
          <LanguageSwitcher
            title={t('switchLangTitle')}
            ariaControlsId="lang-switcher-desktop"
            dataTestButton="langSwitcherDesktopButton"
            dataTestLangList="langSwitcherDesktopLangList"
            dataTestLangButton="langSwitcherDesktopLangButton"
          />
        </li>
        <li>
          <ThemeSwitcher
            title={t('themeSwitcherTitle')}
            dataTestButton="themeSwitcherDesktopButton"
          />
        </li>
        <li>
          <Link href="/cart">
            <CartCount title={t('cartTitle')} />
          </Link>
        </li>
        {userTab}
      </ul>
    </nav>
  );
};
export default DesktopNavigation;
