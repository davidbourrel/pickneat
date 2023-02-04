import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import styles from './Location.module.css';
import { mapUrl, position } from './const';

// Static components
import CustomMarker from './CustomMaker';
import Address from './Address';

export default function MapWithoutSSR() {
  return (
    <MapContainer
      doubleClickZoom={false}
      center={position}
      zoom={15}
      className={styles.mapContainer}
    >
      <TileLayer url={mapUrl} detectRetina={true} />
      <CustomMarker position={position} open>
        <Address />
      </CustomMarker>
    </MapContainer>
  );
}
