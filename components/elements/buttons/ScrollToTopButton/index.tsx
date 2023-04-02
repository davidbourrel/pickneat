import { useEffect, useState } from 'react';
import { ArrowDirectionEnum } from '../../Arrow/types';
import styles from './ScrollToTopButton.module.css';

// Static components
import Button from '../Button';
import Arrow from '../../Arrow';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const buttonClassName = `${styles.button} ${isVisible ? styles.active : ''}`;

  const handleScrollToTopClick = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

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
      data-test="scrollToTopButton">
      <div className={styles.svgContainer}>
        <Arrow direction={ArrowDirectionEnum.Top} />
      </div>
    </Button>
  );
};
export default ScrollToTopButton;
