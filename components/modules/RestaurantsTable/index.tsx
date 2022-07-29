import { FC } from 'react';
import styles from './RestaurantsTable.module.css';
import restaurants from 'public/translations/pages/restaurants.json';
import { useRouter } from 'next/router';
import useTranslation from 'hooks/useTranslation';
import DayRow from './DayRow';

const RestaurantsTable: FC = () => {
  const { locale } = useRouter();

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
  } = useTranslation(restaurants, locale);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>{day}</th>
          <th>{lunch}</th>
          <th>{dinner}</th>
        </tr>
      </thead>
      <tbody>
        <DayRow
          day="monday"
          dayTranslation={monday}
          lunchTranslation={lunchWeeklyHours}
          dinnerTranslation={dinnerWeeklyHours}
        />
        <DayRow
          day="tuesday"
          dayTranslation={tuesday}
          lunchTranslation={lunchWeeklyHours}
          dinnerTranslation={dinnerWeeklyHours}
        />
        <DayRow
          day="wednesday"
          dayTranslation={wednesday}
          lunchTranslation={lunchWeeklyHours}
          dinnerTranslation={dinnerWeeklyHours}
        />
        <DayRow
          day="thursday"
          dayTranslation={thursday}
          lunchTranslation={lunchWeeklyHours}
          dinnerTranslation={dinnerWeeklyHours}
        />
        <DayRow
          day="friday"
          dayTranslation={friday}
          lunchTranslation={lunchWeeklyHours}
          dinnerTranslation={dinnerWeeklyHours}
        />
        <DayRow
          day="saturday"
          dayTranslation={saturday}
          lunchTranslation={lunchWeekendHours}
          dinnerTranslation={dinnerWeekendHours}
        />
        <DayRow
          day="sunday"
          dayTranslation={sunday}
          lunchTranslation={lunchWeekendHours}
          dinnerTranslation={dinnerWeekendHours}
        />
      </tbody>
    </table>
  );
};

export default RestaurantsTable;
