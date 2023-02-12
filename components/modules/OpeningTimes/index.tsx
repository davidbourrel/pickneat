import { useTranslations } from 'next-intl';
import styles from './OpeningTimes.module.css';
import { DaysOfTheWeekEnum } from './types';

// Static components
import DayRow from './DayRow';
import TableHeader from './TableHeader';

const OpeningTimes = () => {
  const t = useTranslations('Restaurants');

  return (
    <table className={styles.table} data-test="openingTimes">
      <TableHeader day={t('day')} lunch={t('lunch')} dinner={t('dinner')} />
      <tbody>
        <DayRow
          day={DaysOfTheWeekEnum.Monday}
          dayTranslation={t('monday')}
          lunchTranslation={t('lunchWeeklyHours')}
          dinnerTranslation={t('dinnerWeeklyHours')}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Tuesday}
          dayTranslation={t('tuesday')}
          lunchTranslation={t('lunchWeeklyHours')}
          dinnerTranslation={t('dinnerWeeklyHours')}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Wednesday}
          dayTranslation={t('wednesday')}
          lunchTranslation={t('lunchWeeklyHours')}
          dinnerTranslation={t('dinnerWeeklyHours')}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Thursday}
          dayTranslation={t('thursday')}
          lunchTranslation={t('lunchWeeklyHours')}
          dinnerTranslation={t('dinnerWeeklyHours')}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Friday}
          dayTranslation={t('friday')}
          lunchTranslation={t('lunchWeeklyHours')}
          dinnerTranslation={t('dinnerWeeklyHours')}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Saturday}
          dayTranslation={t('saturday')}
          lunchTranslation={t('lunchWeekendHours')}
          dinnerTranslation={t('dinnerWeekendHours')}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Sunday}
          dayTranslation={t('sunday')}
          lunchTranslation={t('lunchWeekendHours')}
          dinnerTranslation={t('dinnerWeekendHours')}
        />
      </tbody>
    </table>
  );
};

export default OpeningTimes;
