import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { GetStaticPropsContext } from 'next/types';
import ActiveLink from 'components/elements/ActiveLink';
import styles from './DesktopNavigation.module.css';
import LanguageSwitcher from 'components/elements/LanguageSwitcher';
import { useUser } from '@auth0/nextjs-auth0';
import ThemeSwitcher from 'components/elements/ThemeSwitcher';
import CartCount from 'components/elements/CartCount';
import ProfileIcon from 'components/elements/ProfileIcon';
import Button from 'components/elements/buttons/Button';
import { pick } from 'lodash';

export default function DesktopNavigation() {
  const { asPath } = useRouter();
  const { user } = useUser();

  const t = useTranslations('Navigation');

  const userTab = useMemo(
    () =>
      user && user.picture ? (
        <li title={t('profile')}>
          <ActiveLink href="/profile" path={asPath}>
            <ProfileIcon />
          </ActiveLink>
        </li>
      ) : (
        <li title={t('loginTitle')}>
          <ActiveLink href="/api/auth/login" path={asPath} tabIndex={-1}>
            <Button border>{t('login')}</Button>
          </ActiveLink>
        </li>
      ),
    [user, asPath, t]
  );

  return (
    <nav
      className={styles.nav}
      aria-label="desktop navigation"
      data-test="desktopNavigation"
    >
      <div className={styles.navListContainer}>
        <ul className={styles.navList}>
          <li title={t('menuTitle')}>
            <ActiveLink href="/" path={asPath}>
              {t('menu')}
            </ActiveLink>
          </li>
          <li title={t('restaurantsTitle')}>
            <ActiveLink href="/restaurants" path={asPath}>
              {t('restaurants')}
            </ActiveLink>
          </li>
          <li title={t('deliveryTitle')}>
            <ActiveLink href="/delivery" path={asPath}>
              {t('delivery')}
            </ActiveLink>
          </li>
        </ul>
        <ul className={styles.navList}>
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
              title={t('switchThemeTitle')}
              dataTestButton="themeSwitcherDesktopButton"
            />
          </li>
          <li>
            <ActiveLink href="/cart" path={asPath}>
              <CartCount title={t('cartTitle')} />
            </ActiveLink>
          </li>
          {userTab}
        </ul>
      </div>
    </nav>
  );
}

DesktopNavigation.messages = ['Navigation'];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        await import(`../../../../messages/${locale}.json`),
        DesktopNavigation.messages
      ),
    },
  };
}
