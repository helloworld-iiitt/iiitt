"use client";

import { useState, useEffect } from "react";

const daysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Time = () => {
  const [currentTime, setCurrentTime] = useState({
    day: "",
    hour: "",
    minutes: "",
    date: "",
    month: "",
    year: "",
  });

  useEffect(() => {
    function updateCountdown() {
      const date = new Date();
      setCurrentTime({
        day: daysArray[date.getDay()],
        hour: date.getHours().toString().padStart(2, "0"),
        minutes: date.getMinutes().toString().padStart(2, "0"),
        date: date.getDate().toString(),
        month: monthArray[date.getMonth()],
        year: date.getFullYear().toString(),
      });
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <p>
        {currentTime.day}, {currentTime.hour}:{currentTime.minutes}, {currentTime.date}{" "}
        {currentTime.month}
      </p>
      <p>{currentTime.year}</p>
    </div>
  );
};

export default Time;
