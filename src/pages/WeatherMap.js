import React from "react";

function WeatherMap() {

  // ✅ Dummy Weather Data
  const dummyWeather = {
    name: "Prayagraj",
    temp: 32,
    condition: "Sunny"
  };

  return (
    <div style={{ padding: "20px" }}>
      
      <h2>Weather + Map 🌍</h2>

      {/* WEATHER UI */}
      <div className="weather-card">
        <h3>{dummyWeather.name}</h3>
        <p>🌡 Temp: {dummyWeather.temp} °C</p>
        <p>🌤 {dummyWeather.condition}</p>
      </div>

      {/* MAP (OpenStreetMap) */}
      <iframe
        title="Prayagraj Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", border: "none", marginTop: "20px" }}
        src="https://api.openweathermap.org/data/2.5/weather?q=Prayagraj&units=metric&appid=e97bf29829783fc9d9fe2399d774ef23"
      ></iframe>

    </div>
  );
}

export default WeatherMap;