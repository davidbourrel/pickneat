import { FC, HTMLProps, useEffect, useMemo } from 'react';
import useTranslation from 'hooks/useTranslation';
import { ClassNameComponentProps } from '_types/components';
import { InputCommonProps } from './types';
import useInputClassNames from './useInputClassNames';
import errors from 'public/translations/errors.json';
import styles from './Inputs.module.css';

export interface TextInputProps
  extends ClassNameComponentProps,
    InputCommonProps,
    Omit<
      HTMLProps<HTMLInputElement>,
      'onChange' | 'multiple' | 'id' | 'type' | 'label'
    >,
    Required<Pick<HTMLProps<HTMLInputElement>, 'onChange'>> {
  max?: number;
  value: string;
  className?: string;
}

const TextInput: FC<TextInputProps> = ({
  id,
  label,
  error: incomingError,
  showError,
  className = '',
  inputClassName: incomingInputClassName = '',
  onChange,
  setErrorStatus,
  ...props
}) => {
  const { requiredMessage, maxLengthMessage } = useTranslation(errors);

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
      return requiredMessage;
    }
    if (isTooLong) {
      return `${maxLengthMessage} ${props.maxLength}`;
    }
    return null as unknown as string;
  }, [
    isRequiredEmpty,
    isTooLong,
    props.maxLength,
    requiredMessage,
    maxLengthMessage,
  ]);

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
};

export default TextInput;
