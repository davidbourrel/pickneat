import styles from './MainContentLayout.module.css';
import { MainContentLayoutProps } from './types';

const MainContentLayout = ({
  padding = true,
  center = false,
  className = '',
  children,
}: MainContentLayoutProps) => {
  const computedClassName = `${styles.main} ${className} ${
    padding ? 'appPadding' : ''
  } ${center ? styles.center : ''}`;

  return <main className={computedClassName}>{children}</main>;
};
export default MainContentLayout;
