import { forwardRef, ForwardRefRenderFunction, MouseEvent } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './types';

// Static components
import Loader from 'components/elements/Loader';

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
  const trueType = type as 'button' | 'submit' | 'reset' | undefined;

  const definitelyDisabled = busy || (disabled && !onDisabledClick);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled && onDisabledClick) {
      onDisabledClick(e);
    }
    if (!definitelyDisabled && onClick) {
      onClick(e);
    }
  };

  const buttonClassName = headless
    ? className
    : `${styles.button} ${border ? styles.border : ''} ${
        busy || disabled
          ? `${busy ? busyClassName : disabledClassName} ${
              definitelyDisabled ? styles.definitelyDisabled : ''
            }`
          : styles.cursorPointer
      } ${className}`;

  const computedLoader = absoluteLoader ? (
    <Loader absoluteLoader />
  ) : (
    <Loader />
  );

  return (
    <button
      className={buttonClassName}
      onClick={handleClick}
      type={trueType}
      disabled={definitelyDisabled}
      ref={ref}
      {...rest}>
      {children}
      {busy && !hideBusyWheel && computedLoader}
    </button>
  );
};
export default forwardRef(Button);
