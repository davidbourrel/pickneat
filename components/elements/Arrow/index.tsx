import ArrowIcon from 'components/images/icons/ArrowIcon';
import { FC, useMemo } from 'react';
import styles from './Arrow.module.css';
import { ArrowDirectionEnum } from './types';

interface ArrowProps {
  direction: ArrowDirectionEnum;
  caret?: boolean;
}

const Arrow: FC<ArrowProps> = ({ direction, caret = false }) => {
  const rotateClassName = useMemo(() => {
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
    () => `${rotateClassName} ${styles.arrowContainer}`,
    [rotateClassName]
  );

  return caret ? (
    <span aria-hidden="true" className={styles.caret} />
  ) : (
    <div aria-hidden="true" className={arrowClassName}>
      <ArrowIcon className={styles.arrow} />
    </div>
  );
};

export default Arrow;
