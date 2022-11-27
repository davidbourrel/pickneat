import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import Address from './Address';
import styles from './Location.module.css';

const MapWithoutSSR = () => {
  const position: [number, number] = [43.59990664483555, 1.442283655554873];
  const mapUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_KEY}`;

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      className={styles.mapContainer}
    >
      <TileLayer url={mapUrl} />
      <Marker position={position}>
        <Popup>
          <Address />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWithoutSSR;
