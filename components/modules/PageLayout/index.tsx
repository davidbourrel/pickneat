import { ReactNode, useCallback, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import SideNavigation from '../SideNavigation';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
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
}

PageLayout.messages = [
  ...Header.messages,
  ...SideNavigation.messages,
  ...Footer.messages,
];
