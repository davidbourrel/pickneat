import { useMemo } from 'react';
import styles from './Arrow.module.css';
import { ArrowDirectionEnum, ArrowProps } from './types';

// Static components
import ArrowIcon from 'components/images/icons/ArrowIcon';

export default function Arrow({
  direction,
  caret = false,
  className = '',
}: ArrowProps) {
  const directionClassName = useMemo(() => {
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
  }, [direction]);

  const arrowClassName = useMemo(
    () => `${directionClassName} ${className} ${styles.arrowContainer}`,
    [directionClassName, className]
  );

  const caretClassName = useMemo(
    () => `${styles.caret} ${className}`,
    [className]
  );

  return caret ? (
    <span aria-hidden="true" className={caretClassName} />
  ) : (
    <div aria-hidden="true" className={arrowClassName}>
      <ArrowIcon className={styles.arrow} />
    </div>
  );
}
