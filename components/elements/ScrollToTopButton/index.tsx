import { FC, useCallback, useEffect, useMemo, useState } from 'react';
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
      <span className={styles.span} />
    </Button>
  );
};

export default ScrollToTopButton;
