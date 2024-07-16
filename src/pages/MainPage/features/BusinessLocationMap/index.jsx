import { useRef } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { ZoomControl } from "react-leaflet/ZoomControl";
import MapMarker from "@/components/icons/MapMarker";

const BusinessLocationMap = () => {
  const mapRef = useRef();

  return (
    <div
      id="location-map"
      className="basis-full min-h-[calc(100vh-89px)]"
      ref={mapRef}
    >
      <MapContainer
        zoomControl={false}
        center={{ lat: 24.774265, lng: 46.738586 }}
        zoom={13}
        className="relative h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topright" />
        <div
          id="center-marker"
          className="absolute left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2"
        >
          <MapMarker className="w-5 h-5" />
        </div>
      </MapContainer>
    </div>
  );
};

export default BusinessLocationMap;
