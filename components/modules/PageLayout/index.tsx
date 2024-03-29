import { PropsWithChildren, useState } from 'react';

// Static components
import Footer from '../Footer';
import Header from '../Header';
import MobileNavigation from '../Navigation/MobileNavigation';

const PageLayout = ({ children }: PropsWithChildren) => {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);

  const handleToggleMenu = () => setIsMobileNavOpened((c) => !c);

  const handleCloseMenu = () => setIsMobileNavOpened(false);

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
};
export default PageLayout;

PageLayout.messages = ['Footer', 'Navigation'];
