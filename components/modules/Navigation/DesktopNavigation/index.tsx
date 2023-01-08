import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import ActiveLink from 'components/elements/ActiveLink';
import styles from './DesktopNavigation.module.css';
import LanguageSwitcher from 'components/elements/LanguageSwitcher';
import { useUser } from '@auth0/nextjs-auth0';
import ThemeSwitcher from 'components/elements/ThemeSwitcher';
import CartCount from 'components/elements/CartCount';
import ProfileIcon from 'components/elements/ProfileIcon';
import Button from 'components/elements/buttons/Button';

export default function DesktopNavigation() {
  const { pathname } = useRouter();
  const { user } = useUser();

  const t = useTranslations('Navigation');

  const userTab = useMemo(
    () =>
      user && user.picture ? (
        <li title={t('profile')} data-test="profileIcon">
          <ActiveLink href="/profile" path={pathname}>
            <ProfileIcon />
          </ActiveLink>
        </li>
      ) : (
        <li title={t('login')} data-test="profileIcon">
          <ActiveLink href="/api/auth/login" path={pathname} tabIndex={-1}>
            <Button>{t('login')}</Button>
          </ActiveLink>
        </li>
      ),
    [user, pathname, t]
  );

  return (
    <nav
      className={styles.nav}
      aria-label="desktop navigation"
      data-test="desktopNavigation"
    >
      <ul className={styles.navLinkList}>
        <li title={t('menuTitle')}>
          <ActiveLink href="/" path={pathname}>
            {t('menu')}
          </ActiveLink>
        </li>
        <li title={t('restaurantsTitle')}>
          <ActiveLink href="/restaurants" path={pathname}>
            {t('restaurants')}
          </ActiveLink>
        </li>
        <li title={t('deliveryTitle')}>
          <ActiveLink href="/delivery" path={pathname}>
            {t('delivery')}
          </ActiveLink>
        </li>
      </ul>

      <ul className={styles.navLinkList}>
        <li>
          <LanguageSwitcher
            title={t('switchLangTitle')}
            ariaControlsId="lang-switcher-desktop"
            dataTestButton="langSwitcherDesktopButton"
            dataTestLangList="langSwitcherDesktopLangList"
            dataTestLangButton="langSwitcherDesktopLangButton"
          />
        </li>
        <li>
          <ThemeSwitcher
            title={t('themeSwitcherTitle')}
            dataTestButton="themeSwitcherDesktopButton"
          />
        </li>
        <li>
          <ActiveLink href="/cart" path={pathname}>
            <CartCount title={t('cartTitle')} />
          </ActiveLink>
        </li>
        {userTab}
      </ul>
    </nav>
  );
}
