"use client";

const MapContainer = dynamic(
  () => import("react-leaflet").then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then(mod => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then(mod => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then(mod => mod.Popup),
  { ssr: false }

);
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

// Custom marker fix (Leaflet default markers break in Next.js)
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapComponent() {
  const position: [number, number] = [51.27405, 3.03991];

  return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}         style={{ height: "40vh", width: "100%" }}
>

       <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> 

       <Marker position={position} >
        <Popup>
          Sparrenboslaan 26<br />8420 De Haan
        </Popup>
      </Marker> 
     </MapContainer> 
  );
}
