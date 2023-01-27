import { useMemo } from 'react';
import styles from './Loader.module.css';

interface LoaderProps {
  absoluteLoader?: boolean;
  loaderContainerClassName?: string;
  loaderClassName?: string;
  circleClassName?: string;
  width?: string;
  height?: string;
}

export default function Loader({
  absoluteLoader = false,
  loaderContainerClassName = '',
  loaderClassName = '',
  circleClassName = '',
  width = '30px',
  height = '30px',
}: LoaderProps) {
  const computedLoaderContainerClassName = useMemo(
    () =>
      `${styles.loaderContainer} ${loaderContainerClassName} ${
        absoluteLoader ? styles.absoluteLoaderContainer : ''
      }`,
    [loaderContainerClassName, absoluteLoader]
  );

  const computedLoaderClassName = useMemo(
    () => `${styles.loader} ${loaderClassName}`,
    [loaderClassName]
  );

  const computedCircleClassName = useMemo(
    () => `${styles.circle} ${circleClassName}`,
    [circleClassName]
  );
  return (
    <div className={computedLoaderContainerClassName}>
      <svg
        className={computedLoaderClassName}
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
    </div>
  );
}
