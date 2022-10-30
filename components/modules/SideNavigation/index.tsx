import { FC, useCallback, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import ActiveLink from 'components/elements/ActiveLink';
import navigation from 'public/translations/navigation.json';
import useTranslation from 'hooks/useTranslation';
import styles from './SideNavigation.module.css';
import LanguageSwitcher from 'components/elements/LanguageSwitcher';
import { useUser } from '@auth0/nextjs-auth0';
import ThemeSwitcher from 'components/elements/ThemeSwitcher';
import CartCount from 'components/elements/CartCount';
import ProfileIcon from 'components/elements/ProfileIcon';
import Button from 'components/elements/buttons/Button';
import useOutsideClick from 'hooks/useOutsideClick';
import BurgerMenuButton from 'components/elements/buttons/BurgerMenuButton';

interface SideNavigationProps {
  isSideNavOpened: boolean;
  closeMenu: () => void;
}

const SideNavigation: FC<SideNavigationProps> = ({
  isSideNavOpened,
  closeMenu,
}) => {
  const { user } = useUser();

  const { asPath } = useRouter();
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
    closeBurgerMenu,
  } = useTranslation(navigation);

  // Close side navigation on outside click
  const sideNavigationRef = useRef(null as unknown as HTMLHeadingElement);
  const handleOutsideClick = useCallback(() => {
    if (isSideNavOpened) {
      closeMenu();
    }
  }, [isSideNavOpened, closeMenu]);
  useOutsideClick(sideNavigationRef, handleOutsideClick);

  const blackFilterClassName = useMemo(
    () =>
      `${styles.blackFilter} ${
        isSideNavOpened ? styles.activeBlackFilter : ''
      }`,
    [isSideNavOpened]
  );

  const sideNavContainerClassName = useMemo(
    () =>
      `${styles.sideNavContainer} ${
        isSideNavOpened ? styles.sideNavContainerOpened : ''
      }`,
    [isSideNavOpened]
  );

  const userTab = useMemo(
    () =>
      user && user.picture ? (
        <li title={profile}>
          <ActiveLink href="/profile" path={asPath} closeMenu={closeMenu}>
            <ProfileIcon />
          </ActiveLink>
        </li>
      ) : (
        <li title={loginTitle}>
          <ActiveLink
            href="/api/auth/login"
            path={asPath}
            closeMenu={closeMenu}
            tabIndex={-1}
          >
            <Button border>{login}</Button>
          </ActiveLink>
        </li>
      ),
    [user, asPath, closeMenu, profile, login, loginTitle]
  );

  return (
    <div className={blackFilterClassName}>
      <aside
        id="side-navigation"
        className={sideNavContainerClassName}
        ref={sideNavigationRef}
        aria-label="side navigation"
        data-test="sideNavigation"
      >
        <nav className={styles.sideNavigation}>
          <BurgerMenuButton
            isSideNavOpened={isSideNavOpened}
            closeMenu={closeMenu}
            title={closeBurgerMenu}
            className={styles.topRightCloseButton}
            dataTest="closeBurgerMenuButton"
          />
          <ul className={styles.firstNavigation}>
            <li title={menuTitle} className={styles.item}>
              <ActiveLink href="/" path={asPath} closeMenu={closeMenu}>
                {menu}
              </ActiveLink>
            </li>
            <li title={restaurantsTitle} className={styles.item}>
              <ActiveLink
                href="/restaurants"
                path={asPath}
                closeMenu={closeMenu}
              >
                {restaurants}
              </ActiveLink>
            </li>
            <li title={deliveryTitle} className={styles.item}>
              <ActiveLink href="/delivery" path={asPath} closeMenu={closeMenu}>
                {delivery}
              </ActiveLink>
            </li>
          </ul>

          <ul className={styles.secondNavigation}>
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
              <ActiveLink href="/cart" path={asPath} closeMenu={closeMenu}>
                <CartCount title={cartTitle} />
              </ActiveLink>
            </li>
            {userTab}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SideNavigation;
