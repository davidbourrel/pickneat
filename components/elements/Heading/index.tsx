import { useMemo } from 'react';
import styles from './Heading.module.css';
import { HeadingProps } from './types';

export default function Heading({
  children,
  level,
  error = false,
  className = '',
  ...rest
}: HeadingProps) {
  const incomingClassName = useMemo(
    () => `${className} ${error ? styles.error : ''}`,
    [className, error]
  );

  const heading = useMemo(() => {
    switch (level) {
      case 1:
        return (
          <h1 className={`${styles.one} ${incomingClassName}`} {...rest}>
            {children}
          </h1>
        );
      case 2:
        return (
          <h2 className={`${styles.two} ${incomingClassName}`} {...rest}>
            {children}
          </h2>
        );
      case 3:
        return (
          <h3 className={`${styles.three} ${incomingClassName}`} {...rest}>
            {children}
          </h3>
        );
      case 4:
        return (
          <h4 className={`${styles.four} ${incomingClassName}`} {...rest}>
            {children}
          </h4>
        );
      case 5:
        return (
          <h5 className={`${styles.five} ${incomingClassName}`} {...rest}>
            {children}
          </h5>
        );
      case 6:
      default:
        return (
          <h6 className={`${styles.six} ${incomingClassName}`} {...rest}>
            {children}
          </h6>
        );
    }
  }, [children, level, incomingClassName, rest]);

  return heading;
}
