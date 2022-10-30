import { FC } from 'react';
import Navigation from '../Navigation';
import styles from './Header.module.css';
import Link from 'components/elements/Link';
import useTranslation from 'hooks/useTranslation';
import navigation from 'public/translations/navigation.json';
import BurgerMenuButton from 'components/elements/buttons/BurgerMenuButton';

interface HeaderProps {
  isSideNavOpened: boolean;
  closeMenu: () => void;
  handleToggleMenu: () => void;
}

const Header: FC<HeaderProps> = ({
  isSideNavOpened,
  closeMenu,
  handleToggleMenu,
}) => {
  const { openBurgerMenu } = useTranslation(navigation);

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContent} container`}>
        <Link
          href="/"
          className={styles.mainLogo}
          onClick={closeMenu}
          aria-label="PickN`Eat Logo"
          data-test="mainLogo"
        >
          <span>PickN`Eat</span>
        </Link>
        <Navigation />
        <BurgerMenuButton
          isSideNavOpened={isSideNavOpened}
          handleToggleMenu={handleToggleMenu}
          title={openBurgerMenu}
          dataTest="openBurgerMenuButton"
        />
      </div>
    </header>
  );
};

export default Header;
