import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import SideNavigation from '../SideNavigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isSideNavOpened, setIsSideNavOpened] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsSideNavOpened((c) => !c);
  }, []);

  const closeMenu = useCallback(() => {
    setIsSideNavOpened(false);
  }, []);

  useEffect(() => {
    isSideNavOpened
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isSideNavOpened]);

  return (
    <>
      <Header
        isSideNavOpened={isSideNavOpened}
        closeMenu={closeMenu}
        handleToggleMenu={handleToggleMenu}
      />
      <SideNavigation isSideNavOpened={isSideNavOpened} closeMenu={closeMenu} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
