import styles from './Arrow.module.css';
import { ArrowDirectionEnum, ArrowProps } from './types';

// Static components
import ArrowIcon from 'components/images/icons/ArrowIcon';

const Arrow = ({ direction, caret = false, className = '' }: ArrowProps) => {
  const directionClassName = () => {
    switch (direction) {
      case ArrowDirectionEnum.Top:
        return styles.top;
      case ArrowDirectionEnum.Left:
        return styles.left;
      case ArrowDirectionEnum.Bottom:
        return styles.bottom;
      case ArrowDirectionEnum.Right:
      default:
        return styles.right;
    }
  };

  const arrowClassName = `${directionClassName()} ${className} ${
    styles.arrowContainer
  }`;

  const caretClassName = `${styles.caret} ${className}`;

  return caret ? (
    <span aria-hidden="true" className={caretClassName} />
  ) : (
    <div aria-hidden="true" className={arrowClassName}>
      <ArrowIcon className={styles.arrow} />
    </div>
  );
};
export default Arrow;
