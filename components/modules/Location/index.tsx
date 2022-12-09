import dynamic from 'next/dynamic';
import useIsClient from 'hooks/useIsClient';
import Loader from 'components/elements/Loader';
import styles from './Location.module.css';

const MapWithoutSSR = dynamic(() => import('./MapWithoutSSR'), {
  loading: () => <Loader />,
  ssr: false,
});
const MapWithSSR = dynamic(() => import('./MapWithSSR'), {
  // ssr: true,
});

export default function Location() {
  const isClient = useIsClient();

  return (
    <div className={styles.locationContainer} data-test="locationContainer">
      {isClient ? <MapWithoutSSR /> : <MapWithSSR />}
    </div>
  );
}
