import ArrowIcon from 'components/images/icons/ArrowIcon';
import { FC, useMemo } from 'react';
import { ArrowDirectionEnum } from '_types/arrowDirectionEnum';
import styles from './Arrow.module.css';

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
    () => `${rotateClassName} ${styles.container}`,
    [rotateClassName]
  );

  return (
    <div className={arrowClassName}>
      <ArrowIcon className={styles.arrow} />
    </div>
  );
};

export default Arrow;
