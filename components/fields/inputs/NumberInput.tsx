import { FC, HTMLProps, useEffect, useMemo } from 'react';
import useTranslation from 'hooks/useTranslation';
import { ClassNameComponentProps } from '_types/components';
import { InputCommonProps } from './types';
import useInputClassNames from './useInputClassNames';
import errors from 'public/translations/errors.json';
import styles from './Inputs.module.css';

export interface NumberInputProps
  extends ClassNameComponentProps,
    InputCommonProps,
    Omit<
      HTMLProps<HTMLInputElement>,
      'onChange' | 'multiple' | 'id' | 'type' | 'label'
    >,
    Required<Pick<HTMLProps<HTMLInputElement>, 'onChange'>> {
  max?: number;
  value: number;
  className?: string;
}

const NumberInput: FC<NumberInputProps> = ({
  id,
  label,
  error: incomingError,
  showError = true,
  showErrorMessage = true,
  className = '',
  inputClassName: incomingInputClassName = '',
  onChange,
  setErrorStatus,
  ...props
}) => {
  const { requiredMessage, outOfRangeMessage } = useTranslation(errors);

  /***********
   * Validation
   */
  const isRequiredEmpty = useMemo(
    () => props.required && !props.value,
    [props.required, props.value]
  );

  const isOutOfRange = useMemo(() => {
    if (props.max) {
      return props.value > props.max;
    }
    if (props.min) {
      return props.value < props.min;
    }
  }, [props.max, props.min, props.value]);

  const localError = useMemo(() => {
    if (isRequiredEmpty) {
      return requiredMessage;
    }
    if (isOutOfRange) {
      return `${outOfRangeMessage} ${props.max}`;
    }
    return null as unknown as string;
  }, [
    isRequiredEmpty,
    isOutOfRange,
    props.max,
    requiredMessage,
    outOfRangeMessage,
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
      showError && showErrorMessage && error ? (
        <p className={styles.errorMessage}>{error}</p>
      ) : null,
    [showError, showErrorMessage, error]
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
};

export default NumberInput;
