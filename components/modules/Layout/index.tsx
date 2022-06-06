import { UserProfile } from '@auth0/nextjs-auth0';
import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  user: UserProfile;
  loading: boolean;
}

const Layout: FC<LayoutProps> = ({ children, user, loading }) => {
  const [isSideNavOpened, setIsSideNavOpened] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsSideNavOpened((c) => !c);
  }, []);

  const closeMenu = useCallback(() => {
    setIsSideNavOpened(false);
  }, []);

  const mainContainerClassName = useMemo(
    () =>
      ` ${styles.mainContainer} ${isSideNavOpened ? styles.blackFilter : ''} `,
    [isSideNavOpened]
  );
  const footerContainerClassName = useMemo(
    () =>
      ` ${styles.footerContainer} ${
        isSideNavOpened ? styles.blackFilter : ''
      } `,
    [isSideNavOpened]
  );

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
        user={user}
        loading={loading}
      />
      <div className={mainContainerClassName}>{children}</div>
      <div className={footerContainerClassName}>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
