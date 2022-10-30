import { FC, useMemo } from 'react';
import { ClassNameComponentProps } from '_types/components';
import styles from './CheckMark.module.css';

const CheckMark: FC<ClassNameComponentProps> = ({ className = '' }) => {
  const computedClassName = useMemo(
    () => `${styles.checkMark}${className}`,
    [className]
  );

  return <span className={computedClassName}>&#10003;</span>;
};

export default CheckMark;
