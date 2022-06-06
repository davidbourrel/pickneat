import { Dispatch, FC, MouseEvent, SetStateAction, useMemo } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'hooks/useTranslation';
import navigation from 'public/translations/navigation.json';
import ActiveLink from 'components/elements/ActiveLink';
import styles from './Navigation.module.css';
import LanguageSwitcher from 'components/elements/LanguageSwitcher';
import Loader from 'components/elements/Loader';
import Image from 'next/image';

interface NavigationProps {
  lang: string;
  handleLangClick: (e: MouseEvent) => void;
  isLangSwitcherOpened: boolean;
  setIsLangSwitcherOpened: Dispatch<SetStateAction<boolean>>;
  user: any;
  loading: boolean;
}

const Navigation: FC<NavigationProps> = ({
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

  const adminTab = useMemo(
    () =>
      loading ? (
        <Loader />
      ) : !loading && user ? (
        <li title={adminTitle} className={styles.item}>
          <ActiveLink href="/admin" path={asPath}>
            {admin}
          </ActiveLink>
        </li>
      ) : null,
    [loading, user, asPath, adminTitle, admin]
  );

  const userTab = useMemo(
    () =>
      loading ? (
        <Loader />
      ) : !loading && user ? (
        <>
          <li title={profile}>
            <ActiveLink href="/profile" path={asPath}>
              <Image
                src={user.picture}
                alt="User profile"
                width="50"
                height="50"
                className={styles.userPicture}
              />
            </ActiveLink>
          </li>
          <li title={logoutTitle}>
            <ActiveLink href="/api/logout" path={asPath}>
              {logout}
            </ActiveLink>
          </li>
        </>
      ) : (
        <li title={loginTitle}>
          <ActiveLink href="/api/login" path={asPath}>
            {login}
          </ActiveLink>
        </li>
      ),
    [loading, user, asPath, profile, logout, logoutTitle, login, loginTitle]
  );

  return (
    <nav
      className={styles.nav}
      aria-label="main menu"
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
          {adminTab}
        </ul>
        <ul className={styles.navList}>
          {userTab}
          <li title={switchLangTitle}>
            <LanguageSwitcher
              lang={lang}
              handleLangClick={handleLangClick}
              ariaControlsId="lang-menu-desktop"
              dataTestButton="langSwitcherDesktopButton"
              dataTestLangsList="langSwitcherDesktopLangsList"
              dataTestLangButton="langSwitcherDesktopLangButton"
              isLangSwitcherOpened={isLangSwitcherOpened}
              setIsLangSwitcherOpened={setIsLangSwitcherOpened}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
