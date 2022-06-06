import { FC } from 'react';
import ItineraryIcon from 'components/images/icons/ItineraryIcon';
import styles from './OpenLayersMap.module.css';

const Address: FC = () => {
  return (
    <address className={styles.address}>
      <h3>PickN`Eat</h3>
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
