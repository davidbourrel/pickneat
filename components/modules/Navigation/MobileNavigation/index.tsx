import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import styles from './MobileNavigation.module.css';
import useOutsideClick from 'hooks/useOutsideClick';
import { MobileNavigationProps } from './types';

// Static Components
import LanguageSwitcher from 'components/elements/LanguageSwitcher';
import ThemeSwitcher from 'components/elements/ThemeSwitcher';
import BurgerMenuButton from 'components/elements/buttons/BurgerMenuButton';
import Logo from 'components/elements/Logo';
import NavLink from 'components/elements/NavLink';

const MobileNavigation = ({
  isMobileNavOpened,
  handleCloseMenu,
}: MobileNavigationProps) => {
  const { pathname } = useRouter();

  const t = useTranslations('Navigation');

  // Close mobile navigation on outside click
  const mobileNavigationRef = useRef(null as unknown as HTMLHeadingElement);
  const handleOutsideClick = () => {
    if (isMobileNavOpened) {
      handleCloseMenu();
    }
  };

  useOutsideClick(mobileNavigationRef, handleOutsideClick);

  useEffect(() => {
    document.body.style.overflow = isMobileNavOpened ? 'hidden' : 'unset';
  }, [isMobileNavOpened]);

  const blackFilterClassName = `${styles.blackFilter} ${
    isMobileNavOpened ? styles.activeBlackFilter : styles.mobileNavClosed
  }`;

  const mobileNavContainerClassName = `${styles.mobileNavContainer} ${
    isMobileNavOpened ? styles.mobileNavContainerOpened : ''
  }`;

  return (
    <div className={blackFilterClassName}>
      <aside
        id="mobile-navigation"
        className={mobileNavContainerClassName}
        ref={mobileNavigationRef}
        aria-label="mobile navigation"
        data-test="mobileNavigation">
        <nav className={styles.mobileNavigation}>
          <BurgerMenuButton
            isMobileNavOpened={isMobileNavOpened}
            onCloseMenu={handleCloseMenu}
            title={t('closeBurgerMenu')}
            className={styles.topRightCloseButton}
            dataTest="closeBurgerMenuButton"
          />
          <ul className={styles.firstNavigation}>
            <li title={t('menuTitle')}>
              <NavLink
                href="/"
                isActive={pathname === '/'}
                onCloseMenu={handleCloseMenu}>
                {t('menu')}
              </NavLink>
            </li>
            <li title={t('restaurantsTitle')}>
              <NavLink
                href="/restaurants"
                isActive={pathname === '/restaurants'}
                onCloseMenu={handleCloseMenu}>
                {t('restaurants')}
              </NavLink>
            </li>
            <li title={t('deliveryTitle')}>
              <NavLink
                href="/delivery"
                isActive={pathname === '/delivery'}
                onCloseMenu={handleCloseMenu}>
                {t('delivery')}
              </NavLink>
            </li>
          </ul>

          <ul className={styles.secondNavigation}>
            <li>
              <LanguageSwitcher
                title={t('switchLangTitle')}
                ariaControlsId="lang-switcher-mobile"
                dataTestButton="langSwitcherMobileButton"
                dataTestLangList="langSwitcherMobileLangList"
                dataTestLangButton="langSwitcherMobileLangButton"
              />
            </li>
            <li>
              <ThemeSwitcher
                title={t('themeSwitcherTitle')}
                dataTestButton="themeSwitcherMobileButton"
              />
            </li>
            <li>
              <Logo className={styles.logo} />
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};
export default MobileNavigation;
