import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  const [searchedCity, setSearchedCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [displayMode, setDisplayMode] = useState("search"); // "search" or "weather"
  const [cityName, setCityName] = useState("");

  const APIkey = "3d6e43d79aa3e316dee7cb1fc394f4b1";
  const APIcity = "https://api.openweathermap.org/data/2.5/weather";
  const APIcord = "https://api.openweathermap.org/data/2.5/onecall";

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await fetch(APIcity + `?q=${encodeURI(searchedCity)}&appid=${APIkey}`);
        const data = await response.json();
        if (data.message === "Nothing to geocode") {
          // Handle error or use default values
        } else {
          const lat = data.coord.lat;
          const lon = data.coord.lon;
          const corResponse = await fetch(APIcord + `?lat=${lat}&lon=${lon}&appid=${APIkey}`);
          const corData = await corResponse.json();
          setWeatherData(corData);
          setCityName(data.name); // Set the city name
          setDisplayMode("weather"); // Switch to "weather" display mode
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    const submitButton = document.querySelector(".submitButton");
    submitButton.addEventListener("click", handleSearch);

    return () => {
      submitButton.removeEventListener("click", handleSearch);
    };
  }, [searchedCity]);

  return (
    <header>
      <div className="logo">
          <Link to="/">Betta Fish Store</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      {displayMode === "search" && (
        <form>
          <input
            placeholder='Current Location'
            className='cityInput'
            value={searchedCity}
            onChange={(e) => setSearchedCity(e.target.value)}
          />
          <button type="button" className='submitButton'>
            Search
          </button>
        </form>
      )}

      {displayMode === "weather" && weatherData && (
        <div className={`weatherData ${displayMode === "weather" ? "active" : ""}`}>
           <p className="cityName">{cityName}</p>
          <img
            className="weatherIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`}
            alt="Weather Icon"
          />
          <p className="temp">{parseInt(weatherData.current.temp - 273.15)} Celsius</p>
          {/* Display other weather information as needed */}
        </div>
      )}
    </header>
  );
};

export default Header;
