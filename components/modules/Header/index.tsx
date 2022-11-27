import { FC } from 'react';
import MainNavigation from '../MainNavigation';
import styles from './Header.module.css';
import useTranslation from 'hooks/useTranslation';
import navigation from 'public/translations/navigation.json';
import BurgerMenuButton from 'components/elements/buttons/BurgerMenuButton';
import Logo from 'components/elements/Logo';

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
        <Logo closeMenu={closeMenu} />
        <MainNavigation />
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
