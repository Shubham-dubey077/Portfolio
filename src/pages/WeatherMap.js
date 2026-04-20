import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// ✅ ICON FIX
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function WeatherMap() {
  const [position, setPosition] = useState([25.4358, 81.8463]);

  const [weather, setWeather] = useState({
    name: "Prayagraj",
    temp: 32,
    condition: "Sunny",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([
          pos.coords.latitude,
          pos.coords.longitude,
        ]);

        setWeather((prev) => ({
          ...prev,
          name: "Your Location",
        }));
      },
      () => {
        console.log("Location permission denied");
      }
    );
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Weather + Map 🌍</h2>

      {/* WEATHER */}
      <div className="weather-card">
        <h3>{weather.name}</h3>
        <p>🌡 Temp: {weather.temp} °C</p>
        <p>🌤 {weather.condition}</p>
      </div>

      {/* MAP */}
      <div style={{ marginTop: "20px" }}>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "400px", width: "100%", borderRadius: "10px" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>You are here 📍</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default WeatherMap;