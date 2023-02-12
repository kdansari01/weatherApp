import "./default.scss";

export const Cards = ({ cityName, temp, weather }) => {
  return (
    <div className="weather-card">
      <input type="checkbox" id="nightMode" className="input" />
      <div className="weather-card__header">
        <span className="city">Delhi</span>
        <span className="temperature">
          {/* {(weather.temp - 273.15).toFixed(2)}°C */}
          22.02°C
        </span>
        <span className="status">Cloud</span>
        <span className="status">feels: 21.10°C</span>

        <div className="weather-card__clear">
          <div className="sun"></div>
          <div className="stars">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="grassland"></div>
          <div className="grassland"></div>
        </div>
      </div>

      {/* <div className="weather-card__detail">
          <div className="forecast">
            <span>min-temp</span>
            <span></span>
            <span>{(weather.temp_min - 273.15).toFixed(2)}°C</span>
          </div>
          <div className="forecast">
            <span>max-temp</span>
            <span></span>
            <span>{(weather.temp_max - 273.15).toFixed(2)}°C</span>
          </div>
        </div> */}

      {/* <label for="nightMode">Switch to night mode</label>
      <label for="nightMode" className="show">
        Switch to morning mode
      </label> */}
    </div>
  );
};
