import { FC, useMemo, MouseEvent, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import ActiveLink from 'components/elements/ActiveLink';
import navigation from 'public/translations/navigation.json';
import useTranslation from 'hooks/useTranslation';
import styles from './SideNavigation.module.css';
import LanguageSwitcher from 'components/elements/LanguageSwitcher';
import Loader from 'components/elements/Loader';
import Image from 'next/image';

interface SideNavigationProps {
  isSideNavOpened: boolean;
  closeMenu: () => void;
  lang: string;
  handleLangClick: (e: MouseEvent) => void;
  isLangSwitcherOpened: boolean;
  setIsLangSwitcherOpened: Dispatch<SetStateAction<boolean>>;
  user: any;
  loading: boolean;
}

const SideNavigation: FC<SideNavigationProps> = ({
  isSideNavOpened,
  closeMenu,
  lang,
  handleLangClick,
  isLangSwitcherOpened,
  setIsLangSwitcherOpened,
  user,
  loading,
}) => {
  const { asPath, locale } = useRouter();

  const translations = useTranslation(navigation, locale);
  const {
    menu,
    menuTitle,
    restaurants,
    restaurantsTitle,
    delivery,
    deliveryTitle,
    admin,
    adminTitle,
    login,
    loginTitle,
    logout,
    logoutTitle,
    profile,
    switchLangTitle,
  } = translations;

  const navClassName = useMemo(
    () =>
      `${styles.nav} ${isSideNavOpened ? styles.navOpened : styles.navClosed}`,
    [isSideNavOpened]
  );

  const adminTab = useMemo(
    () =>
      loading ? (
        <Loader />
      ) : !loading && user ? (
        <li title={adminTitle} className={styles.item}>
          <ActiveLink href="/admin" path={asPath} closeMenu={closeMenu}>
            {admin}
          </ActiveLink>
        </li>
      ) : null,
    [loading, user, adminTitle, admin, asPath, closeMenu]
  );

  const userTab = useMemo(
    () =>
      loading ? (
        <Loader />
      ) : !loading && user ? (
        <>
          <li title={profile} className={styles.item}>
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
          <li title={logoutTitle} className={styles.item}>
            <ActiveLink href="/api/logout" path={asPath} closeMenu={closeMenu}>
              {logout}
            </ActiveLink>
          </li>
        </>
      ) : (
        <li title={loginTitle} className={styles.item}>
          <ActiveLink href="/api/login" path={asPath} closeMenu={closeMenu}>
            {login}
          </ActiveLink>
        </li>
      ),
    [
      loading,
      user,
      asPath,
      closeMenu,
      profile,
      logout,
      logoutTitle,
      login,
      loginTitle,
    ]
  );

  return (
    <nav
      id="side-navigation"
      className={navClassName}
      aria-label="side menu"
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
          {adminTab}
        </ul>
        <ul>
          {userTab}
          <li title={switchLangTitle}>
            <LanguageSwitcher
              lang={lang}
              handleLangClick={handleLangClick}
              ariaControlsId="lang-menu-mobile"
              dataTestButton="langSwitcherMobileButton"
              dataTestLangsList="langSwitcherMobileLangsList"
              dataTestLangButton="langSwitcherMobileLangButton"
              isLangSwitcherOpened={isLangSwitcherOpened}
              setIsLangSwitcherOpened={setIsLangSwitcherOpened}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNavigation;
