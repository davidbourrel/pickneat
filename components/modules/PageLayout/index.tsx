import { ReactNode, useCallback, useState } from 'react';

// Components
import Footer from '../Footer';
import Header from '../Header';
import MobileNavigation from '../Navigation/MobileNavigation';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsMobileNavOpened((c) => !c);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileNavOpened(false);
  }, []);

  return (
    <>
      <Header
        isMobileNavOpened={isMobileNavOpened}
        closeMenu={closeMenu}
        handleToggleMenu={handleToggleMenu}
      />
      <MobileNavigation
        isMobileNavOpened={isMobileNavOpened}
        closeMenu={closeMenu}
      />
      {children}
      <Footer />
    </>
  );
}

PageLayout.messages = ['Footer', 'Navigation'];
