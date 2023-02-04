import dynamic from 'next/dynamic';
import useIsClient from 'hooks/useIsClient';
import styles from './Location.module.css';

// Static components
import Loader from 'components/elements/Loader';

// Dynamic components
const MapWithoutSSR = dynamic(() => import('./MapWithoutSSR'), {
  loading: () => <Loader absoluteLoader />,
  ssr: false,
});
const MapWithSSR = dynamic(() => import('./MapWithSSR'), {
  // ssr: true by default
});

export default function Location() {
  const isClient = useIsClient();

  return (
    <div className={styles.locationContainer} data-test="locationContainer">
      {isClient ? <MapWithoutSSR /> : <MapWithSSR />}
    </div>
  );
}
