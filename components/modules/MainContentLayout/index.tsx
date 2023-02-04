import { PropsWithChildren, useMemo } from 'react';
import { ClassNameProps } from '_types/components';
import styles from './MainContentLayout.module.css';

interface MainContentLayoutProps extends ClassNameProps, PropsWithChildren {
  padding?: boolean;
  center?: boolean;
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
