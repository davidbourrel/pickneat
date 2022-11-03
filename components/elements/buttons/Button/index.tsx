import {
  forwardRef,
  ForwardRefRenderFunction,
  HTMLProps,
  useCallback,
  useMemo,
  MouseEvent,
  ReactNode,
} from 'react';
import styles from './Button.module.css';
import Loader from '../../Loader';

export interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'ref'> {
  children: ReactNode;
  busy?: boolean;
  border?: boolean;
  headless?: boolean;
  hideBusyWheel?: boolean;
  onDisabledClick?: React.HTMLProps<HTMLButtonElement>['onClick'];
  busyClassName?: string;
  disabledClassName?: string;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    children,
    className = '',
    type,
    border,
    disabled,
    headless,
    busy,
    hideBusyWheel,
    onClick,
    onDisabledClick,
    busyClassName = styles.disable,
    disabledClassName = styles.disable,
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
        : `${styles.button} ${border ? styles.border : styles.filled} ${
            busy || disabled
              ? `${busy ? busyClassName : disabledClassName} ${
                  definitelyDisabled ? styles.definitelyDisabled : ''
                }`
              : styles.cursorPointer
          } ${className}`,
    [
      headless,
      border,
      className,
      busy,
      disabled,
      definitelyDisabled,
      busyClassName,
      disabledClassName,
    ]
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
      {busy && !hideBusyWheel && <Loader />}
    </button>
  );
};

export default forwardRef(Button);
