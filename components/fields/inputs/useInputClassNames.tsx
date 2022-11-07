import { useMemo } from 'react';
import styles from './Inputs.module.css';

interface UseInputClassNamesResult {
  labelClassName: string;
  inputClassName: string;
}

const useInputClassNames = (inError: boolean): UseInputClassNamesResult => {
  const labelClassName = useMemo(
    () => `${styles.label} ${inError ? styles.errorLabel : ''}`,
    [inError]
  );
  const inputClassName = useMemo(
    () => `${styles.input} ${inError ? styles.errorInput : ''}`,
    [inError]
  );
  return useMemo(
    () => ({ labelClassName, inputClassName }),
    [labelClassName, inputClassName]
  );
};

export default useInputClassNames;
