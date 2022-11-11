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
import ProfileIcon from 'components/elements/ProfileIcon';
import Button from 'components/elements/buttons/Button';

const Navigation: FC = () => {
  const { asPath } = useRouter();
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
  } = useTranslation(navigation);

  const userTab = useMemo(
    () =>
      user && user.picture ? (
        <li title={profile}>
          <ActiveLink href="/profile" path={asPath}>
            <ProfileIcon />
          </ActiveLink>
        </li>
      ) : (
        <li title={loginTitle}>
          <ActiveLink href="/api/auth/login" path={asPath} tabIndex={-1}>
            <Button border>{login}</Button>
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
              dataTestLangList="langSwitcherDesktopLangList"
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
