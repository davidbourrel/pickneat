import { FC } from 'react';
import dynamic from 'next/dynamic';
import useIsClient from 'hooks/useIsClient';
import Loader from 'components/elements/Loader';

const MapWithoutSSR = dynamic(() => import('./MapWithoutSSR'), {
  loading: () => <Loader />,
  ssr: false,
});
const MapWithSSR = dynamic(() => import('./MapWithSSR'), {
  // ssr: true,
});

const Location: FC = () => {
  const isClient = useIsClient();

  return (
    <div data-test="mapContainer">
      {isClient ? <MapWithoutSSR /> : <MapWithSSR />}
    </div>
  );
};

export default Location;