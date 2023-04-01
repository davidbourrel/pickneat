import styles from './Inputs.module.css';
import { UseInputClassNamesResult } from './types';

const useInputClassNames = (inError: boolean): UseInputClassNamesResult => {
  const labelClassName = `${styles.label} ${inError ? styles.errorLabel : ''}`;
  const inputClassName = `${styles.input} ${inError ? styles.errorInput : ''}`;

  return { labelClassName, inputClassName };
};

export default useInputClassNames;
