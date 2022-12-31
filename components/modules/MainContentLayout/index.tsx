import { ReactNode, useMemo } from 'react';
import { ClassNameComponentProps } from '_types/components';
import styles from './MainContentLayout.module.css';

interface MainContentLayoutProps extends ClassNameComponentProps {
  padding?: boolean;
  center?: boolean;
  children: ReactNode;
}

export default function MainContentLayout({
  padding = true,
  center = false,
  className = '',
  children,
}: MainContentLayoutProps) {
  const computedClassName = useMemo(
    () =>
      `${styles.main} ${className} ${padding ? 'appPadding' : ''} ${
        center ? styles.center : ''
      }`,
    [className, padding, center]
  );

  return <main className={computedClassName}>{children}</main>;
}
