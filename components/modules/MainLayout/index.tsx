import styles from './MainLayout.module.css';
import { MainLayoutProps } from './types';

const MainLayout = ({
  padding = true,
  center = false,
  className = '',
  children,
}: MainLayoutProps) => {
  const computedClassName = `${styles.main} ${className} ${
    padding ? 'appPadding' : ''
  } ${center ? styles.center : ''}`;

  return <main className={computedClassName}>{children}</main>;
};
export default MainLayout;
