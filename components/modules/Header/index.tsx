import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Header.module.css';
import { useUser } from '@auth0/nextjs-auth0';

// Static Components
import BurgerMenuButton from 'components/elements/buttons/BurgerMenuButton';
import DesktopNavigation from 'components/modules/Navigation/DesktopNavigation';
import Logo from 'components/elements/Logo';
import Link from 'components/elements/Link';
import CartCount from 'components/elements/CartCount';
import ProfileIcon from 'components/elements/ProfileIcon';

interface HeaderProps {
  isMobileNavOpened: boolean;
  handleCloseMenu: () => void;
  handleToggleMenu: () => void;
}

export default function Header({
  isMobileNavOpened,
  handleCloseMenu,
  handleToggleMenu,
}: HeaderProps) {
  const { user } = useUser();

  const t = useTranslations('Navigation');

  const userTab = useMemo(
    () =>
      user && user.picture ? (
        <Link href="/profile" title={t('profile')} data-test="profileIcon">
          <ProfileIcon />
        </Link>
      ) : (
        <Link href="/api/auth/login" title={t('login')} data-test="profileIcon">
          <ProfileIcon />
        </Link>
      ),
    [user, t]
  );

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContent} container`}>
        <Logo onCloseMenu={handleCloseMenu} />
        <DesktopNavigation />

        <div className={styles.headerMobileActions}>
          {userTab}
          <Link href="/cart" onClick={handleCloseMenu}>
            <CartCount title={t('cartTitle')} />
          </Link>
          <BurgerMenuButton
            isMobileNavOpened={isMobileNavOpened}
            onToggleMenu={handleToggleMenu}
            title={t('openBurgerMenu')}
            dataTest="openBurgerMenuButton"
          />
        </div>
      </div>
    </header>
  );
}
