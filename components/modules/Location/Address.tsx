import styles from './Location.module.css';
import { itineraryUrl } from './const';

// Static components
import ItineraryIcon from 'components/images/icons/ItineraryIcon';
import Heading from 'components/elements/Heading';
import Link from 'components/elements/Link';

export default function Address() {
  return (
    <address className={styles.address}>
      <Heading level={3} className={styles.title}>
        PickN`Eat - Toulouse
      </Heading>
      <Link
        href={itineraryUrl}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <span>
          <ItineraryIcon className={styles.itineraryIcon} />
          18 rue de Metz
        </span>
        <span>31000 Toulouse, France</span>
      </Link>
      <Link href="tel:+33772348639" className={styles.phone}>
        Phone: 07 72 34 86 39
      </Link>
    </address>
  );
}
