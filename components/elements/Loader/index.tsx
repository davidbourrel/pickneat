import { useMemo } from 'react';
import styles from './Loader.module.css';

interface LoaderProps {
  svgClassName?: string;
  circleClassName?: string;
  width?: string;
  height?: string;
}

export default function Loader({
  svgClassName,
  circleClassName,
  width = '30px',
  height = '30px',
}: LoaderProps) {
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
      width={width}
      height={height}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={computedCircleClassName}
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </svg>
  );
}
