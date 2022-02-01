import React from "react";
import "./Weather.css";
import WeatherCard from "./WeatherCard";
import axios from "axios";
import Loading from "./Loading";

const Weather = (props) => {
  const [weather, setWeather] = React.useState({});

  React.useEffect(() => {
    props.setLoading(true);

    const cityId = props.cities.filter(
      (city) => city.name === props.location
    )[0].id;

    const endpoint = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=1a3f737adce8938ae26d3eb3b18db52e&units=metric&lang=nl`;

    axios({
      method: "GET",
      url: endpoint,
    }).then(({ data }) => {
      const { list } = data;
      const copy = weather;

      for (const key of list) {
        const dtTxt = key.dt_txt;
        const dt = dtTxt.split(" ")[0];

        key.dt = key.dt * 1000;

        if (weather[dt]) {
          weather[dt].push(key);
        } else {
          weather[dt] = [key];
        }
      }

      setWeather(copy);
      setTimeout(() => props.setLoading(false), 2000);
    });
  }, [props.location]);

  const WeatherCards = [];
  for (const entry of Object.keys(weather)) {
    const value =
      weather[entry].length > 5 ? weather[entry].splice(0, 4) : weather[entry];
    WeatherCards.push(<WeatherCard day={entry} data={value} />);
  }

  if (props.loading) {
    return <Loading loading={props.loading} />;
  }

  return <div className="weather">{WeatherCards.splice(0, 4)}</div>;
};

export default Weather;
