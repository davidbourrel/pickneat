import React, { ReactNode, useEffect, useRef } from 'react';
import { Marker, Popup } from 'react-leaflet';

interface CustomMarkerProps {
  position: [number, number];
  open: boolean;
  children: ReactNode;
}

export default function CustomMarker({
  position,
  open = false,
  children,
}: CustomMarkerProps) {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const markerRef = useRef(null as any);

  useEffect(() => {
    if (
      open &&
      markerRef.current !== null &&
      !markerRef.current.isPopupOpen()
    ) {
      markerRef.current.openPopup();
    }
  }, [open]);

  return (
    <Marker ref={markerRef} position={position}>
      <Popup>{children}</Popup>
    </Marker>
  );
}