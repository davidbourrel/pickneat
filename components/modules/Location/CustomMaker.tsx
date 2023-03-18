import React, { useEffect, useRef } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { CustomMarkerProps } from './types';

const CustomMarker = ({
  position,
  open = false,
  children,
}: CustomMarkerProps) => {
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (
      open &&
      markerRef.current !== null &&
      !markerRef.current?.isPopupOpen()
    ) {
      markerRef.current?.openPopup();
    }
  }, [open]);

  return (
    <Marker ref={markerRef} position={position}>
      <Popup>{children}</Popup>
    </Marker>
  );
};
export default CustomMarker;
