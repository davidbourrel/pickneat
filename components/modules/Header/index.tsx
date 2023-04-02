import { useTranslations } from 'next-intl';
import styles from './Header.module.css';
import { HeaderProps } from './types';

// Static Components
import BurgerMenuButton from 'components/elements/buttons/BurgerMenuButton';
import DesktopNavigation from 'components/modules/Navigation/DesktopNavigation';
import Logo from 'components/elements/Logo';
import Link from 'components/elements/Link';
import CartCount from 'components/elements/CartCount';
import ProfileIcon from 'components/elements/ProfileIcon';

const Header = ({
  isMobileNavOpened,
  handleCloseMenu,
  handleToggleMenu,
}: HeaderProps) => {
  const t = useTranslations('Navigation');

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContent} container`}>
        <Logo onCloseMenu={handleCloseMenu} />
        <DesktopNavigation />

        <div className={styles.headerMobileActions}>
          <ProfileIcon />
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
};
export default Header;
