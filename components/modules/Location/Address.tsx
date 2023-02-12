import styles from './Location.module.css';
import { itineraryUrl } from './const';
import {
  PNE_ADDRESS,
  PNE_CITY,
  PNE_PHONE_NUMBER,
} from '_constants/restaurantInformation';

// Static components
import ItineraryIcon from 'components/images/icons/ItineraryIcon';
import Heading from 'components/elements/Heading';
import Link from 'components/elements/Link';

const Address = () => {
  return (
    <address className={styles.address}>
      <Heading level={3} className={styles.title}>
        PickN`Eat
      </Heading>
      <Link
        href={itineraryUrl}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <span>
          <ItineraryIcon className={styles.itineraryIcon} />
          {PNE_ADDRESS}
        </span>
        <span>{PNE_CITY}</span>
      </Link>
      <Link href="tel:+33772348639" className={styles.phone}>
        <span>&#9742; {PNE_PHONE_NUMBER}</span>
      </Link>
    </address>
  );
};
export default Address;
