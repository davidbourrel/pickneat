import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import DesktopNavigation from '../Navigation/DesktopNavigation';
import styles from './Header.module.css';
import { useUser } from '@auth0/nextjs-auth0';
import BurgerMenuButton from 'components/elements/buttons/BurgerMenuButton';
import Logo from 'components/elements/Logo';
import Link from 'components/elements/Link';
import CartCount from 'components/elements/CartCount';
import ProfileIcon from 'components/elements/ProfileIcon';

interface HeaderProps {
  isMobileNavOpened: boolean;
  closeMenu: () => void;
  handleToggleMenu: () => void;
}

export default function Header({
  isMobileNavOpened,
  closeMenu,
  handleToggleMenu,
}: HeaderProps) {
  const { user } = useUser();

  const t = useTranslations('Navigation');

  const userTab = useMemo(
    () =>
      user && user.picture ? (
        <Link href="/profile" title={t('profile')}>
          <ProfileIcon />
        </Link>
      ) : (
        <Link href="/api/auth/login" title={t('login')}>
          <ProfileIcon />
        </Link>
      ),
    [user, t]
  );

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContent} container`}>
        <Logo closeMenu={closeMenu} />
        <DesktopNavigation />

        <div className={styles.headerMobileActions}>
          {userTab}
          <Link href="/cart" onClick={closeMenu}>
            <CartCount title={t('cartTitle')} />
          </Link>
          <BurgerMenuButton
            isMobileNavOpened={isMobileNavOpened}
            handleToggleMenu={handleToggleMenu}
            title={t('openBurgerMenu')}
            dataTest="openBurgerMenuButton"
          />
        </div>
      </div>
    </header>
  );
}
