import { FC, HTMLProps, ReactNode, useMemo } from 'react';
import { HeadingsLevelEnum } from './types';
import styles from './Headings.module.css';

interface HeadingsProps extends HTMLProps<HTMLHeadingElement> {
  children: ReactNode;
  level: string;
}

const Headings: FC<HeadingsProps> = ({
  children,
  level,
  className = '',
  ...rest
}) => {
  const heading = useMemo(() => {
    switch (level) {
      case HeadingsLevelEnum.One:
        return (
          <h1 className={`${styles.one} ${className}`} {...rest}>
            {children}
          </h1>
        );
      case HeadingsLevelEnum.Two:
        return (
          <h2 className={`${styles.two} ${className}`} {...rest}>
            {children}
          </h2>
        );
      case HeadingsLevelEnum.Three:
        return (
          <h3 className={`${styles.three} ${className}`} {...rest}>
            {children}
          </h3>
        );
      case HeadingsLevelEnum.Four:
        return (
          <h4 className={`${styles.four} ${className}`} {...rest}>
            {children}
          </h4>
        );
      case HeadingsLevelEnum.Five:
        return (
          <h5 className={`${styles.five} ${className}`} {...rest}>
            {children}
          </h5>
        );
      case HeadingsLevelEnum.Six:
      default:
        return (
          <h6 className={`${styles.six} ${className}`} {...rest}>
            {children}
          </h6>
        );
    }
  }, [children, level, className, rest]);
  return <>{heading}</>;
};

export default Headings;
