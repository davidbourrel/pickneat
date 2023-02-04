import { useCallback, useEffect, useMemo, useState } from 'react';
import Arrow from '../../Arrow';
import { ArrowDirectionEnum } from '../../Arrow/types';
import Button from '../Button';
import styles from './ScrollToTopButton.module.css';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const buttonClassName = useMemo(
    () => `${styles.button} ${isVisible ? styles.active : ''}`,
    [isVisible]
  );

  const handleScrollToTopClick = useCallback(
    () =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      }),
    []
  );

  useEffect(() => {
    const toggleVisibility = (): void => setIsVisible(window.scrollY > 200);

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Button
      className={buttonClassName}
      onClick={handleScrollToTopClick}
      absoluteLoader
      aria-label="scroll to top"
      data-test="scrollToTopButton"
    >
      <div className={styles.svgContainer}>
        <Arrow direction={ArrowDirectionEnum.Top} />
      </div>
    </Button>
  );
}
