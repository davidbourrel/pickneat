import { ClassNameProps } from '_types/components';
import styles from './CheckMark.module.css';

const CheckMark = ({ className = '' }: ClassNameProps) => {
  const computedClassName = `${styles.checkMark} ${className}`;

  return <span className={computedClassName}>&#10003;</span>;
};
export default CheckMark;
