import { FC } from 'react';
import styles from './RestaurantsTable.module.css';
import restaurants from 'public/translations/pages/restaurants.json';
import { useRouter } from 'next/router';
import useTranslation from 'hooks/useTranslation';

const RestaurantsTable: FC = () => {
  const { locale } = useRouter();

  const translations = useTranslation(restaurants, locale);
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
  } = translations;

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
        <tr>
          <td>{monday}</td>
          <td>{lunchWeeklyHours}</td>
          <td>{dinnerWeeklyHours}</td>
        </tr>
        <tr>
          <td>{tuesday}</td>
          <td>{lunchWeeklyHours}</td>
          <td>{dinnerWeeklyHours}</td>
        </tr>
        <tr>
          <td>{wednesday}</td>
          <td>{lunchWeeklyHours}</td>
          <td>{dinnerWeeklyHours}</td>
        </tr>
        <tr>
          <td>{thursday}</td>
          <td>{lunchWeeklyHours}</td>
          <td>{dinnerWeeklyHours}</td>
        </tr>
        <tr>
          <td>{friday}</td>
          <td>{lunchWeeklyHours}</td>
          <td>{dinnerWeeklyHours}</td>
        </tr>
        <tr>
          <td>{saturday}</td>
          <td>{lunchWeekendHours}</td>
          <td>{dinnerWeekendHours}</td>
        </tr>
        <tr>
          <td>{sunday}</td>
          <td>{lunchWeekendHours}</td>
          <td>{dinnerWeekendHours}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default RestaurantsTable;
