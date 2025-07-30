import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;
    try {
      const res = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
      setWeather(res.data);
      setError("");
    } catch (err) {
      setError("❌ City not found or error fetching weather.");
      setWeather(null);
    }
  };

  return (
    <div className="App">
      <h1>🌤️ Weather App</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && getWeather()}
        />
        <button onClick={getWeather}>Get Weather</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather">
          <h2>📍 {weather.name}, {weather.sys.country}</h2>
          <p>🌡️ {weather.main.temp}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬️ Wind: {weather.wind.speed} m/s</p>
          <p>🌈 {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
