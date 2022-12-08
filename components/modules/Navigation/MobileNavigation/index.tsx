import { useCallback, useEffect, useMemo, useRef } from 'react';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import ActiveLink from 'components/elements/ActiveLink';
import styles from './MobileNavigation.module.css';
import LanguageSwitcher from 'components/elements/LanguageSwitcher';
import { useUser } from '@auth0/nextjs-auth0';
import ThemeSwitcher from 'components/elements/ThemeSwitcher';
import CartCount from 'components/elements/CartCount';
import ProfileIcon from 'components/elements/ProfileIcon';
import Button from 'components/elements/buttons/Button';
import useOutsideClick from 'hooks/useOutsideClick';
import BurgerMenuButton from 'components/elements/buttons/BurgerMenuButton';
import { pick } from 'lodash';

interface MobileNavigationProps {
  isMobileNavOpened: boolean;
  closeMenu: () => void;
}

export default function MobileNavigation({
  isMobileNavOpened,
  closeMenu,
}: MobileNavigationProps) {
  const { user } = useUser();

  const { asPath } = useRouter();

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
    isMobileNavOpened
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [isMobileNavOpened]);

  const blackFilterClassName = useMemo(
    () =>
      `${styles.blackFilter} ${
        isMobileNavOpened ? styles.activeBlackFilter : ''
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

  const userTab = useMemo(
    () =>
      user && user.picture ? (
        <li title={t('profile')}>
          <ActiveLink href="/profile" path={asPath} closeMenu={closeMenu}>
            <ProfileIcon />
          </ActiveLink>
        </li>
      ) : (
        <li title={t('loginTitle')}>
          <ActiveLink
            href="/api/auth/login"
            path={asPath}
            closeMenu={closeMenu}
            tabIndex={-1}
          >
            <Button border>{t('login')}</Button>
          </ActiveLink>
        </li>
      ),
    [user, asPath, closeMenu, t]
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
              <ActiveLink href="/" path={asPath} closeMenu={closeMenu}>
                {t('menu')}
              </ActiveLink>
            </li>
            <li title={t('restaurantsTitle')}>
              <ActiveLink
                href="/restaurants"
                path={asPath}
                closeMenu={closeMenu}
              >
                {t('restaurants')}
              </ActiveLink>
            </li>
            <li title={t('deliveryTitle')}>
              <ActiveLink href="/delivery" path={asPath} closeMenu={closeMenu}>
                {t('delivery')}
              </ActiveLink>
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
                title={t('switchThemeTitle')}
                dataTestButton="themeSwitcherMobileButton"
              />
            </li>
            <li>
              <ActiveLink href="/cart" path={asPath} closeMenu={closeMenu}>
                <CartCount title={t('cartTitle')} />
              </ActiveLink>
            </li>
            {userTab}
          </ul>
        </nav>
      </aside>
    </div>
  );
}

MobileNavigation.messages = ['Navigation'];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        await import(`../../../../messages/${locale}.json`),
        MobileNavigation.messages
      ),
    },
  };
}
