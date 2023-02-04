import {
  forwardRef,
  ForwardRefRenderFunction,
  HTMLProps,
  useCallback,
  useMemo,
  MouseEvent,
  PropsWithChildren,
} from 'react';
import styles from './Button.module.css';
import Loader from '../../Loader';

export interface ButtonProps
  extends PropsWithChildren,
    Omit<HTMLProps<HTMLButtonElement>, 'ref'> {
  absoluteLoader?: boolean;
  border?: boolean;
  busy?: boolean;
  busyClassName?: string;
  disabledClassName?: string;
  headless?: boolean;
  hideBusyWheel?: boolean;
  onDisabledClick?: React.HTMLProps<HTMLButtonElement>['onClick'];
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    children,
    className = '',
    absoluteLoader = false,
    border,
    busy,
    busyClassName = styles.disable,
    disabled,
    disabledClassName = styles.disable,
    headless,
    hideBusyWheel,
    onClick,
    onDisabledClick,
    type,
    ...rest
  },
  ref
) => {
  const trueType = useMemo(
    () => type as 'button' | 'submit' | 'reset' | undefined,
    [type]
  );
  const definitelyDisabled = useMemo(
    () => busy || (disabled && !onDisabledClick),
    [busy, disabled, onDisabledClick]
  );

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (disabled && onDisabledClick) {
        onDisabledClick(e);
      } else if (!definitelyDisabled && onClick) {
        onClick(e);
      }
    },
    [disabled, definitelyDisabled, onClick, onDisabledClick]
  );

  const buttonClassName = useMemo(
    () =>
      headless
        ? className
        : `${styles.button} ${border ? styles.border : ''} ${
            busy || disabled
              ? `${busy ? busyClassName : disabledClassName} ${
                  definitelyDisabled ? styles.definitelyDisabled : ''
                }`
              : styles.cursorPointer
          } ${className}`,
    [
      headless,
      className,
      border,
      busy,
      disabled,
      definitelyDisabled,
      busyClassName,
      disabledClassName,
    ]
  );

  const computedLoader = useMemo(
    () => (absoluteLoader ? <Loader absoluteLoader /> : <Loader />),
    [absoluteLoader]
  );

  return (
    <button
      className={buttonClassName}
      onClick={handleClick}
      type={trueType}
      disabled={definitelyDisabled}
      ref={ref}
      {...rest}
    >
      {children}
      {busy && !hideBusyWheel && computedLoader}
    </button>
  );
};

export default forwardRef(Button);
