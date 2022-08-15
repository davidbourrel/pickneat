import { FC, useCallback, useRef } from 'react';
import Navigation from '../Navigation';
import styles from './Header.module.css';
import BurgerMenuToggle from 'components/elements/buttons/BurgerMenuToggle';
import SideNavigation from '../SideNavigation';
import useOutsideClick from 'hooks/useOutsideClick';
import Link from 'components/elements/Link';

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
  // Close side navigation on outside click
  const HeaderRef = useRef(null as unknown as HTMLHeadingElement);
  const handleOutsideClick = useCallback(() => {
    if (isSideNavOpened) {
      closeMenu();
    }
  }, [isSideNavOpened, closeMenu]);
  useOutsideClick(HeaderRef, handleOutsideClick);

  return (
    <header ref={HeaderRef} className={styles.header}>
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
        <BurgerMenuToggle
          isSideNavOpened={isSideNavOpened}
          handleToggleMenu={handleToggleMenu}
        />
        <SideNavigation
          isSideNavOpened={isSideNavOpened}
          closeMenu={closeMenu}
        />
      </div>
    </header>
  );
};

export default Header;
