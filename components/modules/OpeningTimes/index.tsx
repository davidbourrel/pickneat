import { FC } from 'react';
import styles from './OpeningTimes.module.css';
import DayRow from './DayRow';
import TableHeader from './TableHeader';
import { useTranslations } from 'next-intl';
import { GetStaticProps } from 'next/types';

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  };
};

export default OpeningTimes;
