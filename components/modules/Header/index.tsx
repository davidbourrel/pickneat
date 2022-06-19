import { FC, MouseEvent, useCallback, useRef, useState } from 'react';
import Navigation from '../Navigation';
import styles from './Header.module.css';
import BurgerMenuToggle from 'components/elements/buttons/BurgerMenuToggle';
import SideNavigation from '../SideNavigation';
import useOutsideClick from 'hooks/useOutsideClick';
import { useRouter } from 'next/router';
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
  const { locale } = useRouter();

  const [lang, setLang] = useState(locale ?? 'en');
  const [isLangSwitcherOpened, setIsLangSwitcherOpened] = useState(false);

  const handleLangClick = useCallback((e: MouseEvent) => {
    setLang((e.target as HTMLButtonElement).lang);
    setIsLangSwitcherOpened(false);
  }, []);

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
        <Navigation
          lang={lang}
          handleLangClick={handleLangClick}
          isLangSwitcherOpened={isLangSwitcherOpened}
          setIsLangSwitcherOpened={setIsLangSwitcherOpened}
        />
        <BurgerMenuToggle
          isSideNavOpened={isSideNavOpened}
          handleToggleMenu={handleToggleMenu}
        />
        <SideNavigation
          isSideNavOpened={isSideNavOpened}
          closeMenu={closeMenu}
          lang={lang}
          handleLangClick={handleLangClick}
          isLangSwitcherOpened={isLangSwitcherOpened}
          setIsLangSwitcherOpened={setIsLangSwitcherOpened}
        />
      </div>
    </header>
  );
};

export default Header;
