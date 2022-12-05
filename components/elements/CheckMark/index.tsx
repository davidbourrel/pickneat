import { useMemo } from 'react';
import { ClassNameComponentProps } from '_types/components';
import styles from './CheckMark.module.css';

export default function CheckMark({ className = '' }: ClassNameComponentProps) {
  const computedClassName = useMemo(
    () => `${styles.checkMark}${className}`,
    [className]
  );

  return <span className={computedClassName}>&#10003;</span>;
}
