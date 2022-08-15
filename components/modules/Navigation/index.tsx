import { FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'hooks/useTranslation';
import navigation from 'public/translations/navigation.json';
import ActiveLink from 'components/elements/ActiveLink';
import styles from './Navigation.module.css';
import LanguageSwitcher from 'components/elements/LanguageSwitcher';
import { useUser } from '@auth0/nextjs-auth0';
import ThemeSwitcher from 'components/elements/ThemeSwitcher';
import CartCount from 'components/elements/CartCount';
import UserIcon from 'components/images/icons/UserIcon';

const Navigation: FC = () => {
  const { asPath, locale } = useRouter();
  const { user } = useUser();

  const {
    menu,
    menuTitle,
    restaurants,
    restaurantsTitle,
    delivery,
    deliveryTitle,
    login,
    loginTitle,
    profile,
    switchLangTitle,
    switchThemeTitle,
    cartTitle,
  } = useTranslation(navigation, locale);

  const userTab = useMemo(
    () =>
      user && user.picture ? (
        <li title={profile}>
          <ActiveLink href="/profile" path={asPath}>
            <UserIcon className={styles.userIcon} />
          </ActiveLink>
        </li>
      ) : (
        <li title={loginTitle}>
          <ActiveLink href="/api/auth/login" path={asPath}>
            {login}
          </ActiveLink>
        </li>
      ),
    [user, asPath, profile, login, loginTitle]
  );

  return (
    <nav
      className={styles.nav}
      aria-label="main navigation"
      data-test="mainNavigation"
    >
      <div className={styles.navListContainer}>
        <ul className={styles.navList}>
          <li title={menuTitle}>
            <ActiveLink href="/" path={asPath}>
              {menu}
            </ActiveLink>
          </li>
          <li title={restaurantsTitle}>
            <ActiveLink href="/restaurants" path={asPath}>
              {restaurants}
            </ActiveLink>
          </li>
          <li title={deliveryTitle}>
            <ActiveLink href="/delivery" path={asPath}>
              {delivery}
            </ActiveLink>
          </li>
        </ul>
        <ul className={styles.navList}>
          <li>
            <LanguageSwitcher
              title={switchLangTitle}
              ariaControlsId="lang-switcher-desktop"
              dataTestButton="langSwitcherDesktopButton"
              dataTestLangsList="langSwitcherDesktopLangsList"
              dataTestLangButton="langSwitcherDesktopLangButton"
            />
          </li>
          <li>
            <ThemeSwitcher
              title={switchThemeTitle}
              dataTestButton="themeSwitcherDesktopButton"
            />
          </li>
          <li>
            <ActiveLink href="/cart" path={asPath}>
              <CartCount title={cartTitle} />
            </ActiveLink>
          </li>
          {userTab}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
