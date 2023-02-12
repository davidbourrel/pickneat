import { useMemo } from 'react';
import NextLink from 'next/link';
import useIsClient from 'hooks/useIsClient';
import styles from './Link.module.css';
import { FLinkProps } from './types';

/**
 * use this component rather than next/link
 */
const Link = ({
  obfuscate,
  isLoading = false,
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  target,
  className = '',
  ...props
}: FLinkProps) => {
  const isClient = useIsClient();

  const computedClassName = useMemo(
    () => `${className} ${isLoading ? styles.isLoading : ''}`,
    [className, isLoading]
  );

  return !obfuscate || isClient ? (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
      tabIndex={0}
      target={target}
      role="link"
      className={computedClassName}
      {...props}
    >
      {children}
    </NextLink>
  ) : (
    <span {...props} className={computedClassName}>
      {children}
    </span>
  );
};
export default Link;
