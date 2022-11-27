import { FC } from 'react';
import restaurants from 'public/translations/pages/restaurants.json';
import useTranslation from 'hooks/useTranslation';
import styles from './OpeningTimes.module.css';
import DayRow from './DayRow';
import TableHeader from './TableHeader';

export enum DaysOfTheWeekEnum {
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
  Sunday = 'sunday',
}

const OpeningTimes: FC = () => {
  const {
    day,
    lunch,
    dinner,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
    lunchWeeklyHours,
    lunchWeekendHours,
    dinnerWeeklyHours,
    dinnerWeekendHours,
  } = useTranslation(restaurants);

  return (
    <table className={styles.table} data-test="openingTimes">
      <TableHeader day={day} lunch={lunch} dinner={dinner} />
      <tbody>
        <DayRow
          day={DaysOfTheWeekEnum.Monday}
          dayTranslation={monday}
          lunchTranslation={lunchWeeklyHours}
          dinnerTranslation={dinnerWeeklyHours}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Tuesday}
          dayTranslation={tuesday}
          lunchTranslation={lunchWeeklyHours}
          dinnerTranslation={dinnerWeeklyHours}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Wednesday}
          dayTranslation={wednesday}
          lunchTranslation={lunchWeeklyHours}
          dinnerTranslation={dinnerWeeklyHours}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Thursday}
          dayTranslation={thursday}
          lunchTranslation={lunchWeeklyHours}
          dinnerTranslation={dinnerWeeklyHours}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Friday}
          dayTranslation={friday}
          lunchTranslation={lunchWeeklyHours}
          dinnerTranslation={dinnerWeeklyHours}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Saturday}
          dayTranslation={saturday}
          lunchTranslation={lunchWeekendHours}
          dinnerTranslation={dinnerWeekendHours}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Sunday}
          dayTranslation={sunday}
          lunchTranslation={lunchWeekendHours}
          dinnerTranslation={dinnerWeekendHours}
        />
      </tbody>
    </table>
  );
};

export default OpeningTimes;
