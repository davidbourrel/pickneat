import { FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import ActiveLink from 'components/elements/ActiveLink';
import navigation from 'public/translations/navigation.json';
import useTranslation from 'hooks/useTranslation';
import styles from './SideNavigation.module.css';
import LanguageSwitcher from 'components/elements/LanguageSwitcher';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import ThemeSwitcher from 'components/elements/ThemeSwitcher';
import CartCount from 'components/elements/CartCount';

interface SideNavigationProps {
  isSideNavOpened: boolean;
  closeMenu: () => void;
}

const SideNavigation: FC<SideNavigationProps> = ({
  isSideNavOpened,
  closeMenu,
}) => {
  const { user } = useUser();
  const { asPath, locale } = useRouter();

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
  } = useTranslation(navigation, locale);

  const navClassName = useMemo(
    () =>
      `${styles.nav} ${isSideNavOpened ? styles.navOpened : styles.navClosed}`,
    [isSideNavOpened]
  );

  const userTab = useMemo(
    () =>
      user && user.picture ? (
        <li title={profile}>
          <ActiveLink href="/profile" path={asPath} closeMenu={closeMenu}>
            <Image
              src={user.picture}
              alt="User profile"
              width="50"
              height="50"
              className={styles.userPicture}
            />
          </ActiveLink>
        </li>
      ) : (
        <li title={loginTitle}>
          <ActiveLink
            href="/api/auth/login"
            path={asPath}
            closeMenu={closeMenu}
          >
            {login}
          </ActiveLink>
        </li>
      ),
    [user, asPath, closeMenu, profile, login, loginTitle]
  );

  return (
    <nav
      id="side-navigation"
      className={navClassName}
      aria-label="side navigation"
      data-test="sideNavigation"
    >
      <div className={styles.topBoxShadow} />
      <div className={styles.navListContainer}>
        <ul>
          <li title={menuTitle} className={styles.item}>
            <ActiveLink href="/" path={asPath} closeMenu={closeMenu}>
              {menu}
            </ActiveLink>
          </li>
          <li title={restaurantsTitle} className={styles.item}>
            <ActiveLink href="/restaurants" path={asPath} closeMenu={closeMenu}>
              {restaurants}
            </ActiveLink>
          </li>
          <li title={deliveryTitle} className={styles.item}>
            <ActiveLink href="/delivery" path={asPath} closeMenu={closeMenu}>
              {delivery}
            </ActiveLink>
          </li>
        </ul>
        <ul>
          <li className={styles.item}>
            <LanguageSwitcher
              title={switchLangTitle}
              ariaControlsId="lang-switcher-mobile"
              dataTestButton="langSwitcherMobileButton"
              dataTestLangsList="langSwitcherMobileLangsList"
              dataTestLangButton="langSwitcherMobileLangButton"
            />
          </li>
          <li className={styles.item}>
            <ThemeSwitcher
              title={switchThemeTitle}
              dataTestButton="themeSwitcherMobileButton"
            />
          </li>
          <li className={styles.item}>
            <ActiveLink href="/cart" path={asPath}>
              <CartCount />
            </ActiveLink>
          </li>
          {userTab}
        </ul>
      </div>
    </nav>
  );
};

export default SideNavigation;
