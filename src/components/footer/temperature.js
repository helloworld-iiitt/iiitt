"use client";
import React, { useState, useEffect } from "react";
import Time from "./time";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import nextConfig from "../../../next.config";
import Image from "next/image";
const Temperature = () => {

  const [weatherDescription, setweatherDescription] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [weathericon, setWeatherIcon] = useState("");
  const imageURL = `https://openweathermap.org/img/wn/${weathericon}@2x.png`;

  function handleText(text) {
    const firstLetter = text.slice(0, 1).toUpperCase();
    const remaining = text.slice(1);
    return firstLetter + remaining;
  }
  useEffect(() => {
    const apiKey = `https://api.openweathermap.org/data/2.5/weather?q=tiruchirapalli,india&units=metric&appid=${nextConfig.env.OPEN_API_WEATHER}`;
    fetch(apiKey)
      .then((res) => res.json())
      .then((result) => {
        setweatherDescription(handleText(result.weather[0].description));
        setTemperature(result.main.temp);
        setHumidity(result.main.humidity);
        setWind(result.wind.speed);
        setWeatherIcon(result.weather[0].icon);
      })
      .catch((err) => console.log(err));
  }, [weatherDescription, temperature, humidity, wind]);

  return (
    <div className="count-down-main">
      <h2>
        Tiruchirappalli <SchoolTwoToneIcon />
      </h2>
      <div className="main-hr trichy"></div>
      <Time />
      <div className="temperature">
        <img src={`${imageURL}`}  alt="weather"/>
        <div>
          <p>{weatherDescription}</p>
          <p>Temp {temperature}°C</p>
        </div>
      </div>
      <p>
        Humidity: {humidity}% Wind:{wind}km/h;
      </p>
      <div className="nature">
        <span>NEAR TO NATURE</span>
        <FavoriteIcon className="heart" />
      </div>
    </div>
  );
};

export default Temperature;
