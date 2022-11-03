import {
  FC,
  HTMLProps,
  KeyboardEvent,
  PropsWithChildren,
  useCallback,
  useMemo,
} from 'react';
import NextLink, { LinkProps } from 'next/link';
import useIsClient from 'hooks/useIsClient';
import styles from './Link.module.css';

/**
 * use this component rather than next/link
 */
interface FLinkProps
  extends Omit<
      HTMLProps<HTMLAnchorElement>,
      'href' | 'as' | 'onClick' | 'onMouseEnter' | 'onTouchStart'
    >,
    LinkProps,
    PropsWithChildren {
  obfuscate?: boolean;
  isLoading?: boolean;
}

const Link: FC<FLinkProps> = ({
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
}) => {
  const isClient = useIsClient();

  const handleClick = useCallback(
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    (e: any) => {
      let selector = `${href}`;
      if (selector.startsWith('#')) {
        // supports id (#) and className (#.) targets
        if (selector.startsWith('#.')) {
          selector = selector.substring(1);
        }
        e.preventDefault();
        const destination = document.querySelector(selector);
        if (destination) {
          const topStickies = Array.from(
            document.querySelectorAll('.top-sticky')
          );
          const yOffset = topStickies.reduce(
            (acc, elem) => acc - elem.getBoundingClientRect().height,
            0
          );
          const y =
            destination.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          if (
            'focus' in destination &&
            typeof (destination as HTMLElement).focus === 'function'
          ) {
            (destination as HTMLElement).focus();
          }
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    },
    [href]
  );

  const handleKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        handleClick(e);
      }
    },
    [handleClick]
  );

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
    >
      <a
        tabIndex={0}
        target={target}
        role="link"
        onClick={handleClick}
        onKeyUp={handleKeyUp}
        className={computedClassName}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  ) : (
    <span {...props} className={computedClassName}>
      {children}
    </span>
  );
};

export default Link;
