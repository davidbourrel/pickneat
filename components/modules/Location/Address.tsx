import { FC } from 'react';
import ItineraryIcon from 'components/images/icons/ItineraryIcon';
import styles from './Location.module.css';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import Link from 'components/elements/Link';

const itineraryUrl = 'https://www.google.com';

const Address: FC = () => {
  return (
    <address className={styles.address}>
      <Heading level={HeadingLevelEnum.Three}>PickN`Eat restaurant</Heading>
      <Link href={itineraryUrl} target="_blank" rel="noreferrer">
        <ItineraryIcon className={styles.itineraryIcon} />{' '}
        <span>18 rue de Metz</span>
      </Link>
      <span>31000 Toulouse, France</span>
      <span>07 50 40 25 **</span>
    </address>
  );
};

export default Address;
