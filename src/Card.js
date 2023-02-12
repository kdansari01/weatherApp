import "./card.scss";

const Card = ({ city, weather, Condition }) => {
  return (
    <>
      <div className="weather-card">
        <input type="checkbox" id="nightMode" className="input" />
        <div className="weather-card__header">
          <span className="city">{city}</span>
          <span className="temperature">
            {(weather.temp - 273.15).toFixed(2)}°C
          </span>
          <span className="status">{Condition}</span>
          <span className="status">
            feels: {(weather.feels_like - 273.15).toFixed(2)}°C
          </span>

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

        <div className="weather-card__detail">
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
        </div>

        <label for="nightMode">Switch to night mode</label>
        <label for="nightMode" className="show">
          Switch to morning mode
        </label>
      </div>
    </>
  );
};
export default Card;
