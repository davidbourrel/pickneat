import { FC, MouseEvent, useCallback, useRef, useState } from 'react';
import Container from '../Container';
import Navigation from '../Navigation';
import styles from './Header.module.css';
import BurgerMenuToggle from 'components/elements/buttons/BurgerMenuToggle';
import SideNavigation from '../SideNavigation';
import useOutsideClick from 'hooks/useOutsideClick';
import { useRouter } from 'next/router';
import Link from 'components/elements/Link';
import { UserProfile } from '@auth0/nextjs-auth0';

interface HeaderProps {
  isSideNavOpened: boolean;
  closeMenu: () => void;
  handleToggleMenu: () => void;
  user: UserProfile;
  loading: boolean;
}

const Header: FC<HeaderProps> = ({
  isSideNavOpened,
  closeMenu,
  handleToggleMenu,
  user,
  loading,
}) => {
  const { locale } = useRouter();

  const [lang, setLang] = useState(locale ?? 'en');
  const [isLangSwitcherOpened, setIsLangSwitcherOpened] = useState(false);

  const handleLangClick = useCallback((e: MouseEvent) => {
    setLang((e.target as HTMLButtonElement).value);
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
      <Container>
        <div className={styles.headerContent}>
          <Link href="/">
            <span className={styles.mainLogo} data-test="mainLogo">
              PickN`Eat
            </span>
          </Link>
          <Navigation
            lang={lang}
            handleLangClick={handleLangClick}
            isLangSwitcherOpened={isLangSwitcherOpened}
            setIsLangSwitcherOpened={setIsLangSwitcherOpened}
            user={user}
            loading={loading}
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
            user={user}
            loading={loading}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
