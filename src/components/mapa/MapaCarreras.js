import React, {useState } from "react";
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import './MapaCarreras.css';
import * as pueblosCastellon from "../../coordenadasPueblos.json";
import corredor from './corredor2.svg'
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

export const icon = new L.Icon({
  iconUrl: corredor,
  iconSize: [25, 25]
});

export default function Mapa() {
  const [activeCarrera, setActiveCarrera] = useState(null);

  return (
    <div className="mapa">
    <h4>Las carreras en nuestra Provincia:</h4>
    <Map center={[39.964788, -0.274569]} zoom={10}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {pueblosCastellon.features.map(carrera => (
        <Marker
          key={carrera.properties.PARK_ID}
          position={[
            carrera.geometry.coordinates[1],
            carrera.geometry.coordinates[0]
          ]}
          onClick={() => {
            setActiveCarrera(carrera);
          }}
          icon={icon}
        />
      ))}

      {activeCarrera && (
        <Popup
          position={[
            activeCarrera.geometry.coordinates[1],
            activeCarrera.geometry.coordinates[0]
          ]}
          onClose={() => {
            setActiveCarrera(null);
          }}
        >
          <div>
            <h2>{activeCarrera.properties.NAME}</h2>
            <p>{activeCarrera.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
      )}
    </Map>
    </div>
  );
}