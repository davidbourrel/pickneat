import { useMemo } from 'react';
import styles from './Inputs.module.css';
import { UseInputClassNamesResult } from './types';

const useInputClassNames = (inError: boolean): UseInputClassNamesResult => {
  const labelClassName = useMemo(
    () => `${styles.label} ${inError ? styles.errorLabel : ''}`,
    [inError]
  );
  const inputClassName = useMemo(
    () => `${styles.input} ${inError ? styles.errorInput : ''}`,
    [inError]
  );

  return { labelClassName, inputClassName };
};

export default useInputClassNames;
