import { HTMLProps, ReactNode, useMemo } from 'react';
import NextLink, { LinkProps } from 'next/link';
import useIsClient from 'hooks/useIsClient';
import styles from './Link.module.css';

/**
 * use this component rather than next/link
 */
interface FLinkProps
  extends Omit<
      HTMLProps<HTMLAnchorElement>,
      'href' | 'as' | 'onClick' | 'onMouseEnter' | 'onTouchStart' | 'ref'
    >,
    LinkProps {
  children: ReactNode;
  obfuscate?: boolean;
  isLoading?: boolean;
}

export default function Link({
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
}: FLinkProps) {
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
}
