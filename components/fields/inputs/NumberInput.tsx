import { useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { NumberInputProps } from './types';
import useInputClassNames from './useInputClassNames';
import styles from './Inputs.module.css';

export default function NumberInput({
  id,
  label,
  error: incomingError,
  showError = true,
  className = '',
  inputClassName: incomingInputClassName = '',
  onChange,
  setErrorStatus,
  ...props
}: NumberInputProps) {
  const { value, required, max, min } = props;

  const t = useTranslations('Errors');

  /***********
   * Validation
   ***********/
  const isRequiredEmpty = useMemo(() => required && !value, [required, value]);

  const isOutOfRange = useMemo(() => {
    if (max) {
      return value > max;
    }
    if (min) {
      return value < min;
    }
  }, [max, min, value]);

  const localError = useMemo(() => {
    if (isRequiredEmpty) {
      return t('requiredMessage');
    }
    if (isOutOfRange) {
      return `${t('outOfRangeMessage')} ${max}`;
    }
    return null as unknown as string;
  }, [isRequiredEmpty, isOutOfRange, max, t]);

  useEffect(() => {
    if (setErrorStatus) {
      setErrorStatus(!!localError);
    }
  }, [value, setErrorStatus, localError]);

  const errorMessage = useMemo(
    () => incomingError ?? localError,
    [localError, incomingError]
  );

  /***********
   * Style
   ***********/
  const computedContainerClassName = useMemo(
    () => `${styles.inputContainer} ${className}`,
    [className]
  );

  const { labelClassName, inputClassName } = useInputClassNames(
    showError && !!errorMessage
  );

  const computedInputClassName = useMemo(
    () => `${inputClassName} ${incomingInputClassName}`,
    [inputClassName, incomingInputClassName]
  );

  /***********
   * Component
   ***********/
  const labelComponent = useMemo(
    () =>
      !!label && (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      ),
    [label, id, labelClassName]
  );

  const errorComponent = useMemo(
    () =>
      showError &&
      !!errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>,
    [showError, errorMessage]
  );

  return (
    <div className={computedContainerClassName}>
      {labelComponent}
      <input
        id={id}
        type="number"
        className={computedInputClassName}
        onChange={onChange}
        {...props}
      />
      {errorComponent}
    </div>
  );
}
