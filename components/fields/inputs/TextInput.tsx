import { useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { TextInputProps } from './types';
import useInputClassNames from './useInputClassNames';
import styles from './Inputs.module.css';

export default function TextInput({
  id,
  label,
  error: incomingError,
  showError,
  className = '',
  inputClassName: incomingInputClassName = '',
  onChange,
  setErrorStatus,
  ...props
}: TextInputProps) {
  const t = useTranslations('Errors');

  /***********
   * Validation
   */
  const isRequiredEmpty = useMemo(
    () => props.required && !props.value,
    [props.required, props.value]
  );
  const isTooLong = useMemo(
    () => props.maxLength && props.value.length > props.maxLength,
    [props.maxLength, props.value]
  );
  const localError = useMemo(() => {
    if (isRequiredEmpty) {
      return t('requiredMessage');
    }
    if (isTooLong) {
      return `${t('maxLengthMessage')} ${props.maxLength}`;
    }
    return null as unknown as string;
  }, [isRequiredEmpty, isTooLong, props.maxLength, t]);

  useEffect(() => {
    if (setErrorStatus) {
      setErrorStatus(!!localError);
    }
  }, [props.value, setErrorStatus, localError]);

  const error = useMemo(
    () => incomingError ?? localError,
    [localError, incomingError]
  );

  /***********
   * Style
   */
  const computedContainerClassName = useMemo(
    () => `${styles.inputContainer} ${className}`,
    [className]
  );

  const { labelClassName, inputClassName } = useInputClassNames(
    !!(showError && error)
  );

  const computedInputClassName = useMemo(
    () => `${inputClassName} ${incomingInputClassName}`,
    [inputClassName, incomingInputClassName]
  );

  /***********
   * Component
   */
  const labelComponent = useMemo(
    () =>
      label ? (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      ) : null,
    [label, id, labelClassName]
  );

  const errorComponent = useMemo(
    () =>
      showError && error ? (
        <p className={styles.errorMessage}>{error}</p>
      ) : null,
    [showError, error]
  );

  return (
    <div className={computedContainerClassName}>
      {labelComponent}
      <input
        id={id}
        type="text"
        className={computedInputClassName}
        onChange={onChange}
        {...props}
      />
      {errorComponent}
    </div>
  );
}
