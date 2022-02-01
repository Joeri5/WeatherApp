import React from "react";
import "./WeatherCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faCloudRain, faSun } from "@fortawesome/free-solid-svg-icons";

const Icons = {
    'Rain': <FontAwesomeIcon icon={faCloudRain} size="lg"/>,
    'Clouds': <FontAwesomeIcon icon={faCloud} size="lg"/>,
    'Clear': <FontAwesomeIcon icon={faSun} size="lg"/>
}

const WeatherCard = ({ day, data }) => {
  return (
    <div className="weathercard">
      <div className="weathercard_title">{day}</div>
      <hr />
      <div className="weathercard_body">
        {data.map((key) => (
          <div className="weathercard_item">
            <span class="weathercard_tag">{key.dt > new Date().getTime() ? `${new Date(key.dt).getHours()}:00` : 'Nu'}</span>
            <span class="weathercard_temp">{Math.round(key.main.temp)}°</span>
            <span class="weathercard_status">{Icons[key.weather[0].main]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
