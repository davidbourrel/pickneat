import { FC } from 'react';
import Button from '../Button';
import styles from './QuantityButton.module.css';

const QuantityButton: FC = () => {
  return (
    <div className={styles.quantityContainer}>
      <Button className={styles.minus} headless>
        <span>&#8722;</span>
      </Button>
      <input className={styles.input} type="number" value={5} />
      <Button className={styles.plus} headless>
        <span>&#43;</span>
      </Button>
    </div>
  );
};

export default QuantityButton;
