import { FC, useCallback, useState } from 'react';
import NumberInput from 'components/fields/inputs/NumberInput';
import Button from '../Button';
import styles from './QuantityButton.module.css';

const QuantityButton: FC = () => {
  // TODO : Remove when cart context will be created
  const [lastName, setLastName] = useState(5);
  const handleChange = useCallback(
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    (e: any) => {
      setLastName(e.target.value);
    },
    [setLastName]
  );

  return (
    <div className={styles.quantityContainer}>
      <Button className={styles.minus} headless>
        <span>&#8722;</span>
      </Button>
      <NumberInput
        id="product_quantity_field"
        min={0}
        max={20}
        className={styles.inputContainer}
        inputClassName={styles.input}
        onChange={handleChange}
        value={lastName}
        showErrorMessage={false}
      />

      <Button className={styles.plus} headless>
        <span>&#43;</span>
      </Button>
    </div>
  );
};

export default QuantityButton;
