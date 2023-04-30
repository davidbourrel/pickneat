import { useEffect, useId } from 'react';
import { useTranslations } from 'next-intl';
import { TextInputProps } from './types';
import useInputClassNames from './useInputClassNames';
import styles from './Inputs.module.css';

// Static components
import RequiredStarLabel from 'components/elements/RequiredStarLabel';

const TextInput = ({
  label,
  error: incomingError,
  showError = true,
  className = '',
  inputClassName: incomingInputClassName = '',
  onChange,
  setErrorStatus,
  ...props
}: TextInputProps) => {
  const { value, required, maxLength } = props;
  const id = useId();
  const t = useTranslations('Errors');

  /***********
   * Validation
   ***********/
  const isRequiredEmpty = required && !value;
  const isTooLong = maxLength && value?.length > maxLength;

  const localError =
    (isRequiredEmpty && t('requiredMessage')) ||
    (isTooLong && `${t('maxLengthMessage')} ${maxLength}`) ||
    null;

  useEffect(() => {
    if (setErrorStatus) {
      setErrorStatus(!!localError);
    }
  }, [value, setErrorStatus, localError]);

  const errorMessage = incomingError ?? localError;

  /***********
   * Style
   ***********/
  const computedContainerClassName = `${styles.inputContainer} ${className}`;

  const { labelClassName, inputClassName } = useInputClassNames(
    showError && !!errorMessage
  );

  const computedInputClassName = `${inputClassName} ${incomingInputClassName}`;

  /***********
   * Component
   ***********/
  const labelComponent = !!label && (
    <label htmlFor={id} className={labelClassName}>
      {label}
      {!!required && <RequiredStarLabel />}
    </label>
  );

  const errorComponent = showError && !!errorMessage && (
    <p className={styles.errorMessage}>{errorMessage}</p>
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
};
export default TextInput;
