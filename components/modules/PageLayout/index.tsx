import { ReactNode, useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import Loader from 'components/elements/Loader';

const Header = dynamic(() => import('../Header'), {
  loading: () => <Loader />,
});
const Footer = dynamic(() => import('../Footer'));
const MobileNavigation = dynamic(
  () => import('../Navigation/MobileNavigation')
);

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
