import {
  isFriday,
  isMonday,
  isSaturday,
  isSunday,
  isThursday,
  isTuesday,
  isWednesday,
} from 'date-fns';
import { FC, useMemo } from 'react';
import styles from './RestaurantsTable.module.css';

interface DayRowProps {
  day: string;
  dayTranslation: string;
  lunchTranslation: string;
  dinnerTranslation: string;
}

const DayRow: FC<DayRowProps> = ({
  day,
  dayTranslation,
  lunchTranslation,
  dinnerTranslation,
}) => {
  const currentDayClassName = useMemo(() => {
    switch (day) {
      case 'monday':
        return isMonday(Date.now()) ? styles.currentDay : '';
      case 'tuesday':
        return isTuesday(Date.now()) ? styles.currentDay : '';
      case 'wednesday':
        return isWednesday(Date.now()) ? styles.currentDay : '';
      case 'thursday':
        return isThursday(Date.now()) ? styles.currentDay : '';
      case 'friday':
        return isFriday(Date.now()) ? styles.currentDay : '';
      case 'saturday':
        return isSaturday(Date.now()) ? styles.currentDay : '';
      case 'sunday':
        return isSunday(Date.now()) ? styles.currentDay : '';

      default:
        return '';
    }
  }, [day]);

  return (
    <tr className={currentDayClassName}>
      <th>{dayTranslation}</th>
      <td>{lunchTranslation}</td>
      <td>{dinnerTranslation}</td>
    </tr>
  );
};

export default DayRow;
