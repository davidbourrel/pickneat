import { useMemo } from 'react';
import styles from './MainContentLayout.module.css';
import { MainContentLayoutProps } from './types';

const MainContentLayout = ({
  padding = true,
  center = false,
  className = '',
  children,
}: MainContentLayoutProps) => {
  const computedClassName = useMemo(
    () =>
      `${styles.main} ${className} ${padding ? 'appPadding' : ''} ${
        center ? styles.center : ''
      }`,
    [className, padding, center]
  );

  return <main className={computedClassName}>{children}</main>;
};
export default MainContentLayout;
