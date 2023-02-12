import { useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { TextInputProps } from './types';
import useInputClassNames from './useInputClassNames';
import styles from './Inputs.module.css';

// Static components
import RequiredStarLabel from 'components/elements/RequiredStarLabel';

export default function TextInput({
  id,
  label,
  error: incomingError,
  showError = true,
  className = '',
  inputClassName: incomingInputClassName = '',
  onChange,
  setErrorStatus,
  ...props
}: TextInputProps) {
  const { value, required, maxLength } = props;
  const t = useTranslations('Errors');

  /***********
   * Validation
   ***********/
  const isRequiredEmpty = useMemo(() => required && !value, [required, value]);
  const isTooLong = useMemo(
    () => maxLength && value?.length > maxLength,
    [maxLength, value]
  );
  const localError = useMemo(() => {
    if (isRequiredEmpty) {
      return t('requiredMessage');
    }
    if (isTooLong) {
      return `${t('maxLengthMessage')} ${maxLength}`;
    }
    return null as unknown as string;
  }, [isRequiredEmpty, isTooLong, maxLength, t]);

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
          {!!required && <RequiredStarLabel />}
        </label>
      ),
    [label, id, labelClassName, required]
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
        type="text"
        className={computedInputClassName}
        onChange={onChange}
        {...props}
      />
      {errorComponent}
    </div>
  );
}
