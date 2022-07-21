import { FC, RefObject, useMemo, useRef, useState } from 'react';
import { Circle, Fill, Stroke, Style } from 'ol/style';
import { Feature, Map, Overlay, View } from 'ol/index';
import { TileJSON, Vector as VectorSource } from 'ol/source';
import { Point } from 'ol/geom';
import { Tile, Vector as VectorLayer } from 'ol/layer';
import { useGeographic } from 'ol/proj';
import styles from './OpenLayersMap.module.css';
import 'ol/ol.css';
import useEffectOnce from 'hooks/useEffectOnce';
import Address from './Address';

const OpenLayersMap: FC = () => {
  const [isModalVisible, setisModalVisible] = useState(true);
  const mapRef = useRef(null) as RefObject<HTMLDivElement>;
  const popupRef = useRef(null) as RefObject<HTMLDivElement>;

  useGeographic();

  useEffectOnce(() => {
    const position = [1.443700595572556, 43.600301];
    const point = new Point(position);

    /** Base map */
    const rasterLayer = new Tile({
      source: new TileJSON({
        url: `${process.env.NEXT_PUBLIC_MAPTILER_URL}${process.env.NEXT_PUBLIC_MAPTILER_KEY}`,
        tileSize: 512,
        crossOrigin: 'anonymous',
      }),
    });

    /** Circle pin */
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [new Feature(point)],
      }),
      style: new Style({
        image: new Circle({
          radius: 9,
          fill: new Fill({ color: '#72391d' }),
          stroke: new Stroke({ width: 3, color: '#d14242' }),
        }),
      }),
    });

    /** Map creation */
    const initialMap = new Map({
      target: mapRef.current as HTMLDivElement,
      view: new View({
        constrainResolution: true,
        center: position,
        zoom: 14,
      }),
      layers: [rasterLayer, vectorLayer],
    });

    initialMap.on('pointermove', (event) => {
      if (initialMap.hasFeatureAtPixel(event.pixel)) {
        initialMap.getViewport().style.cursor = 'pointer';
        initialMap.on('click', () => {
          setisModalVisible(true);
        });
      } else {
        initialMap.getViewport().style.cursor = 'inherit';
        initialMap.on('click', () => {
          setisModalVisible(false);
        });
      }
    });

    const popup = new Overlay({
      element: popupRef.current as HTMLDivElement,
    });
    popup.setPosition(position);
    initialMap.addOverlay(popup);
  });

  const modalContainerClassName = useMemo(
    () => `${styles.popup} ${isModalVisible ? styles.show : styles.hidden}`,
    [isModalVisible]
  );

  return (
    <div ref={mapRef} data-test="mapContainer" className={styles.mapContainer}>
      <div
        ref={popupRef}
        data-test="mapModal"
        className={modalContainerClassName}
      >
        <Address />
        <span className={styles.arrow} />
      </div>
    </div>
  );
};

export default OpenLayersMap;
