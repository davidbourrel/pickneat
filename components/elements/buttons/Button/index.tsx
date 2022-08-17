import {
  forwardRef,
  ForwardRefRenderFunction,
  HTMLProps,
  useCallback,
  useMemo,
  MouseEvent,
} from 'react';
import styles from './Button.module.css';
import Loader from '../../Loader';

export interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'ref'> {
  busy?: boolean;
  headless?: boolean;
  border?: boolean;
  hideBusyWheel?: boolean;
  busyClassName?: string;
  disabledClassName?: string;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    children,
    className = '',
    type,
    disabled,
    headless,
    border,
    busy,
    hideBusyWheel,
    onClick,
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
  const definitelyDisabled = useMemo(() => busy || disabled, [busy, disabled]);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (!definitelyDisabled && onClick) {
        onClick(e);
      }
    },
    [definitelyDisabled, onClick]
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
