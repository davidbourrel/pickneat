import { FC, HTMLProps, ReactNode, useMemo } from 'react';
import { HeadingLevelEnum } from './types';
import styles from './Heading.module.css';

interface HeadingProps extends HTMLProps<HTMLHeadingElement> {
  children: ReactNode;
  level: string;
}

const Heading: FC<HeadingProps> = ({
  children,
  level,
  className = '',
  ...rest
}) => {
  const heading = useMemo(() => {
    switch (level) {
      case HeadingLevelEnum.One:
        return (
          <h1 className={`${styles.one} ${className}`} {...rest}>
            {children}
          </h1>
        );
      case HeadingLevelEnum.Two:
        return (
          <h2 className={`${styles.two} ${className}`} {...rest}>
            {children}
          </h2>
        );
      case HeadingLevelEnum.Three:
        return (
          <h3 className={`${styles.three} ${className}`} {...rest}>
            {children}
          </h3>
        );
      case HeadingLevelEnum.Four:
        return (
          <h4 className={`${styles.four} ${className}`} {...rest}>
            {children}
          </h4>
        );
      case HeadingLevelEnum.Five:
        return (
          <h5 className={`${styles.five} ${className}`} {...rest}>
            {children}
          </h5>
        );
      case HeadingLevelEnum.Six:
      default:
        return (
          <h6 className={`${styles.six} ${className}`} {...rest}>
            {children}
          </h6>
        );
    }
  }, [children, level, className, rest]);
  return heading;
};

export default Heading;
