import { FC, useMemo, MouseEvent, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import ActiveLink from 'components/elements/ActiveLink';
import navigation from 'public/translations/navigation.json';
import useTranslation from 'hooks/useTranslation';
import styles from './SideNavigation.module.css';
import LanguageSwitcher from 'components/elements/LanguageSwitcher';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import ThemeSwitcher from 'components/elements/ThemeSwitcher';

interface SideNavigationProps {
  isSideNavOpened: boolean;
  closeMenu: () => void;
  lang: string;
  handleLangClick: (e: MouseEvent) => void;
  isLangSwitcherOpened: boolean;
  setIsLangSwitcherOpened: Dispatch<SetStateAction<boolean>>;
}

const SideNavigation: FC<SideNavigationProps> = ({
  isSideNavOpened,
  closeMenu,
  lang,
  handleLangClick,
  isLangSwitcherOpened,
  setIsLangSwitcherOpened,
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
      ) : (
        <li title={loginTitle} className={styles.item}>
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
          {userTab}
          <li className={styles.item}>
            <LanguageSwitcher
              lang={lang}
              handleLangClick={handleLangClick}
              title={switchLangTitle}
              ariaControlsId="lang-switcher-mobile"
              dataTestButton="langSwitcherMobileButton"
              dataTestLangsList="langSwitcherMobileLangsList"
              dataTestLangButton="langSwitcherMobileLangButton"
              isLangSwitcherOpened={isLangSwitcherOpened}
              setIsLangSwitcherOpened={setIsLangSwitcherOpened}
            />
          </li>
          <li>
            <ThemeSwitcher
              title={switchThemeTitle}
              dataTestButton="themeSwitcherMobileButton"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNavigation;
