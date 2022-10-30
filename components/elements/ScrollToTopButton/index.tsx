import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Arrow from '../Arrow';
import { ArrowDirectionEnum } from '../Arrow/types';
import Button from '../buttons/Button';
import styles from './ScrollToTopButton.module.css';

const ScrollToTopButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const buttonClassName = useMemo(
    () => `${styles.button} ${isVisible ? styles.active : ''}`,
    [isVisible]
  );

  const handleScrollToTopButton = useCallback(
    () =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      }),
    []
  );

  useEffect(() => {
    const toggleVisibility = (): void =>
      window.pageYOffset > 10 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Button
      className={buttonClassName}
      onClick={handleScrollToTopButton}
      aria-label="scroll to top"
    >
      <div className={styles.svgContainer}>
        <Arrow direction={ArrowDirectionEnum.Top} />
      </div>
    </Button>
  );
};

export default ScrollToTopButton;
