import { FC } from 'react';
import ItineraryIcon from 'components/images/icons/ItineraryIcon';
import styles from './OpenLayersMap.module.css';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';

const Address: FC = () => {
  return (
    <address className={styles.address}>
      <Heading level={HeadingLevelEnum.Three}>PickN`Eat</Heading>
      <span>
        {' '}
        <ItineraryIcon className={styles.itineraryIcon} />
        18 rue de Metz
      </span>
      <span>31000 Toulouse, France</span>
      <span>07 50 40 25 **</span>
    </address>
  );
};

export default Address;
