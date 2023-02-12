import axios from "axios";
import { useState } from "react";
import Card from "./Card";
import { Cards } from "./Default";
import Input from "./Input";

const Weather = () => {
  const API_KEY = "c700e9fd1755476630b96d797232e588";
  const [city, setCity] = useState("");

  const [weather, setWeather] = useState({});
  console.log("weather", weather);
  const getWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        // `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${cnt}&appid=${API_KEY}`
        // `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (e) {
      console.log("error", e);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather(city);
  };
  const handleSearch = (e) => {
    setCity(e.target.value);
    // getWeather(city);
  };

  return (
    <>
      <div>
        <Input
          className="d-flex justify-content-center mt-4"
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
          city={city}
        />
      </div>
      {/* <div>
        <form
          onSubmit={handleSubmit}
          className=" d-flex justify-content-center "
        >
          <input
            type="text"
            value={city}
            // onChange={(event) => setCity(event.target.value)}
            onChange={handleSearch}
            placeholder="Enter a city"
            required
          />
          <button className="">Search</button>
        </form>
      </div> */}

      <div>
        {weather?.main ? (
          <div>
            <Card
              city={city}
              weather={weather.main}
              Condition={weather.weather[0].description}
            />
            {/* <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°F</p>
            <p>Weather Condition: {weather.weather[0].description}</p> */}
          </div>
        ) : (
          <Cards />
        )}
      </div>
    </>
  );
};

export default Weather;
