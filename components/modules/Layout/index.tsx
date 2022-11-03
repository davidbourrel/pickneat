import { FC, PropsWithChildren, useCallback, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import SideNavigation from '../SideNavigation';

const Layout: FC = ({ children }: PropsWithChildren) => {
  const [isSideNavOpened, setIsSideNavOpened] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsSideNavOpened((c) => !c);
  }, []);

  const closeMenu = useCallback(() => {
    setIsSideNavOpened(false);
  }, []);

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
