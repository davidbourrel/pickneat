import { HTMLProps, ReactNode, useMemo } from 'react';
import styles from './Heading.module.css';

interface HeadingProps extends HTMLProps<HTMLHeadingElement> {
  children: ReactNode;
  level: number;
}

export default function Heading({
  children,
  level,
  className = '',
  ...rest
}: HeadingProps) {
  const heading = useMemo(() => {
    switch (level) {
      case 1:
        return (
          <h1 className={`${styles.one} ${className}`} {...rest}>
            {children}
          </h1>
        );
      case 2:
        return (
          <h2 className={`${styles.two} ${className}`} {...rest}>
            {children}
          </h2>
        );
      case 3:
        return (
          <h3 className={`${styles.three} ${className}`} {...rest}>
            {children}
          </h3>
        );
      case 4:
        return (
          <h4 className={`${styles.four} ${className}`} {...rest}>
            {children}
          </h4>
        );
      case 5:
        return (
          <h5 className={`${styles.five} ${className}`} {...rest}>
            {children}
          </h5>
        );
      case 6:
      default:
        return (
          <h6 className={`${styles.six} ${className}`} {...rest}>
            {children}
          </h6>
        );
    }
  }, [children, level, className, rest]);

  return heading;
}
