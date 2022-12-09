import { useMemo } from 'react';
import { format } from 'date-fns';
import styles from './OpeningTimes.module.css';
import { enUS } from 'date-fns/locale';

interface DayRowProps {
  day: string;
  dayTranslation: string;
  lunchTranslation: string;
  dinnerTranslation: string;
}

export default function DayRow({
  day,
  dayTranslation,
  lunchTranslation,
  dinnerTranslation,
}: DayRowProps) {
  const today = format(new Date(), 'eeee', { locale: enUS });

  const dayClassName = useMemo(
    () => (day === today ? styles.currentDay : styles.day),
    [day, today]
  );

  return (
    <tr className={dayClassName}>
      <th>{dayTranslation}</th>
      <td>{lunchTranslation}</td>
      <td>{dinnerTranslation}</td>
    </tr>
  );
}
