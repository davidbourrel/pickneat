import { FC, useMemo } from 'react';
import styles from './Loader.module.css';

interface LoaderProps {
  svgClassName?: string;
  circleClassName?: string;
}

const Loader: FC<LoaderProps> = ({ svgClassName, circleClassName }) => {
  const computedSvgClassName = useMemo(
    () => (svgClassName ? svgClassName : styles.loader),
    [svgClassName]
  );

  const computedCircleClassName = useMemo(
    () => (circleClassName ? circleClassName : styles.loadingCircle),
    [circleClassName]
  );
  return (
    <svg
      className={computedSvgClassName}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className={computedCircleClassName} cx="30" cy="30" r="27" />
    </svg>
  );
};

export default Loader;
