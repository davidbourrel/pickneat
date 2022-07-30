import { FC, useMemo } from 'react';
import {
  isFriday,
  isMonday,
  isSaturday,
  isSunday,
  isThursday,
  isTuesday,
  isWednesday,
} from 'date-fns';
import { DaysOfTheWeekEnum } from '.';
import styles from './OpeningHours.module.css';

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
      case DaysOfTheWeekEnum.Monday:
        return isMonday(Date.now()) ? styles.currentDay : '';
      case DaysOfTheWeekEnum.Tuesday:
        return isTuesday(Date.now()) ? styles.currentDay : '';
      case DaysOfTheWeekEnum.Wednesday:
        return isWednesday(Date.now()) ? styles.currentDay : '';
      case DaysOfTheWeekEnum.Thursday:
        return isThursday(Date.now()) ? styles.currentDay : '';
      case DaysOfTheWeekEnum.Friday:
        return isFriday(Date.now()) ? styles.currentDay : '';
      case DaysOfTheWeekEnum.Saturday:
        return isSaturday(Date.now()) ? styles.currentDay : '';
      case DaysOfTheWeekEnum.Sunday:
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
