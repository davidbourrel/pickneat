import { PropsWithChildren, useCallback, useState } from 'react';

// Components
import Footer from '../Footer';
import Header from '../Header';
import MobileNavigation from '../Navigation/MobileNavigation';

type PageLayoutProps = PropsWithChildren;

export default function PageLayout({ children }: PageLayoutProps) {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsMobileNavOpened((c) => !c);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsMobileNavOpened(false);
  }, []);

  return (
    <>
      <Header
        isMobileNavOpened={isMobileNavOpened}
        handleCloseMenu={handleCloseMenu}
        handleToggleMenu={handleToggleMenu}
      />
      <MobileNavigation
        isMobileNavOpened={isMobileNavOpened}
        handleCloseMenu={handleCloseMenu}
      />
      {children}
      <Footer />
    </>
  );
}

PageLayout.messages = ['Footer', 'Navigation'];
