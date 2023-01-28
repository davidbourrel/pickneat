import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import styles from './MobileNavigation.module.css';
import useOutsideClick from 'hooks/useOutsideClick';

// Static Components
import LanguageSwitcher from 'components/elements/LanguageSwitcher';
import ThemeSwitcher from 'components/elements/ThemeSwitcher';
import BurgerMenuButton from 'components/elements/buttons/BurgerMenuButton';
import Logo from 'components/elements/Logo';
import NavLink from 'components/elements/NavLink';

interface MobileNavigationProps {
  isMobileNavOpened: boolean;
  closeMenu: () => void;
}

export default function MobileNavigation({
  isMobileNavOpened,
  closeMenu,
}: MobileNavigationProps) {
  const { pathname } = useRouter();

  const t = useTranslations('Navigation');

  // Close mobile navigation on outside click
  const mobileNavigationRef = useRef(null as unknown as HTMLHeadingElement);
  const handleOutsideClick = useCallback(() => {
    if (isMobileNavOpened) {
      closeMenu();
    }
  }, [isMobileNavOpened, closeMenu]);
  useOutsideClick(mobileNavigationRef, handleOutsideClick);

  useEffect(() => {
    document.body.style.overflow = isMobileNavOpened ? 'hidden' : 'unset';
  }, [isMobileNavOpened]);

  const blackFilterClassName = useMemo(
    () =>
      `${styles.blackFilter} ${
        isMobileNavOpened ? styles.activeBlackFilter : styles.mobileNavClosed
      }`,
    [isMobileNavOpened]
  );

  const mobileNavContainerClassName = useMemo(
    () =>
      `${styles.mobileNavContainer} ${
        isMobileNavOpened ? styles.mobileNavContainerOpened : ''
      }`,
    [isMobileNavOpened]
  );

  return (
    <div className={blackFilterClassName}>
      <aside
        id="mobile-navigation"
        className={mobileNavContainerClassName}
        ref={mobileNavigationRef}
        aria-label="mobile navigation"
        data-test="mobileNavigation"
      >
        <nav className={styles.mobileNavigation}>
          <BurgerMenuButton
            isMobileNavOpened={isMobileNavOpened}
            closeMenu={closeMenu}
            title={t('closeBurgerMenu')}
            className={styles.topRightCloseButton}
            dataTest="closeBurgerMenuButton"
          />
          <ul className={styles.firstNavigation}>
            <li title={t('menuTitle')}>
              <NavLink
                href="/"
                isActive={pathname === '/'}
                closeMenu={closeMenu}
              >
                {t('menu')}
              </NavLink>
            </li>
            <li title={t('restaurantsTitle')}>
              <NavLink
                href="/restaurants"
                isActive={pathname === '/restaurants'}
                closeMenu={closeMenu}
              >
                {t('restaurants')}
              </NavLink>
            </li>
            <li title={t('deliveryTitle')}>
              <NavLink
                href="/delivery"
                isActive={pathname === '/delivery'}
                closeMenu={closeMenu}
              >
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
}
