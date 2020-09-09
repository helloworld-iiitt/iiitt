import React, {useState, useEffect} from 'react';
import Icon from '@material-ui/core/Icon';
import './style.css'
import { css } from '@emotion/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import Link from '@material-ui/core/Link';
import Loadable from "react-loadable";


/* Footer */
const Footer = () => {
  const apiKey = `https://api.openweathermap.org/data/2.5/weather?q=tiruchirapalli,india&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
  const [weatherDescription,setweatherDescription] = useState("");
  const [temperature,setTemperature] = useState("");
  const [humidity,setHumidity] = useState(0);
  const [wind,setWind] = useState(0);
  const [weathericon, setWeatherIcon] = useState("");
  const imageURL = `https://openweathermap.org/img/wn/${weathericon}@2x.png`;


  function handleText(text){
    const firstLetter = text.slice(0,1).toUpperCase();
    const remaining = text.slice(1);
    return firstLetter+remaining;
  };
  useEffect(() => {
    fetch(apiKey)
      .then(res => res.json())
      .then(result => {
        setweatherDescription(handleText(result.weather[0].description));
        setTemperature(result.main.temp);
        setHumidity(result.main.humidity);
        setWind(result.wind.speed);
        setWeatherIcon(result.weather[0].icon);
      } )
      .catch(err => console.log(err))
  },[weatherDescription,temperature,humidity,wind])

  const [getday,setgetday] = useState(0);
  const [getHour,setgetHour] = useState(0);
  const [getminutes,setgetminutes] = useState(0);
  const [getDate,setgetDate] = useState(0);
  const [getMonth,setgetMonth] = useState(0);
  const [getFullYear,setgetFullYear] = useState(0);
  const  daysArray = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const  monthArray = [
'January','February','March','April','May','June','July','August','September','October','November','December'];
  function updateCountdown(){

    const getday1 = new Date().getDay();
    const getHour1 = new Date().getHours();
    const getminutes1 = new Date().getMinutes();
    const getDate1 = new Date().getDate();
    const getMonth1 = new Date().getMonth();
    const getFullYear1 = new Date().getFullYear();
    const getHour2 = getHour1%12;

    setgetday( getday1);
    setgetHour( getHour2<=10?`0${getHour2}`:getHour2);
    if(getHour1 / 12 <= 1 ){
      setgetminutes( getminutes1>10?`${getminutes1}am`:`0${getminutes1}am`);
    }else{
      setgetminutes(getminutes1>10?`${getminutes1}pm`:`0${getminutes1}pm`);
    }
    setgetDate( getDate1);
    setgetMonth( getMonth1);
    setgetFullYear(getFullYear1);
  }

  setInterval(updateCountdown, 1000);


  return(
    <div>
      <footer className="footer">
        <div className="main-div">
          <div className="contact-main">
            <div className="contacts">
              <div className="logo">
                <img src={require("./logo.png")} alt="logo"></img>
              </div>
              <h2>Indian Institute Of Information Technology</h2>
              <h3>Trichy Dindigul Highway,Pirattiyur,Tiruchirappalli-620009</h3>
              <a href="office@iiitt.ac.in"><MailIcon className="mailicon" />office@iiitt.ac.in</a>
              <a href="office@iiitt.ac.in"><CallIcon className="phoneicon" />+91 431 2500 539</a>
            </div>
            <div className="icon" >
              <a href="https://twitter.com/iiittrichy?lang=en">
                <TwitterIcon className="twitter"/>
              </a>
              <a href="https://www.facebook.com/IIITTrichy/">
                <FacebookIcon className="facebook"/>
              </a>
              <a href="https://www.linkedin.com/school/iiitt/">
                <LinkedInIcon className="linkedin"/>
              </a>
            </div>
          </div>
          <div className="line"></div>
          <div className="acedemics">

          <h2>Academics</h2>
             <div className="main-hr ace"></div>
                   <a href="../pages/admissionfeestructure/index.js">Programs</a>
                   <hr></hr>
                    <a href="www.google.com">Department</a>
                    <hr></hr>
                     <a href="www.google.com">Curriculum</a>
                     <hr></hr>
                      <a href="www.google.com">Calender</a>
                      <hr></hr>
                       <a href="www.google.com">Holidays</a>

          </div>
          <div className="line"></div>
          <hr className="mobile"></hr>
          <div className="quick-explore">

          <h2>Quick Explore</h2>
          <div className="main-hr  quick-ex"></div>
               <a href="www.google.com">Admission Procedure</a>
               <hr></hr>
                <a href="www.google.com">Fee Structure</a>
                <hr></hr>
                 <a href="www.google.com">Anti Ragging Committee</a>
                 <hr></hr>
                  <a href="www.google.com">FAQ's</a>
          </div>
            <div className="last line"></div>
            <hr className="mobile"></hr>
              <div className="count-down-main">
              <h2>Tiruchirapalli <SchoolTwoToneIcon/></h2>
              <div className="main-hr trichy"></div>
              <p>{daysArray[getday]}, {getHour}:{getminutes},  {getDate} {monthArray[getMonth]}</p>
              <p>{getFullYear}</p>
              <div className="temperature">
                <img src={`${imageURL}`} alt="weather image" />

              <div>
                <p>{weatherDescription}</p>
                <p>Temp {temperature}°C</p>
              </div>
            </div>
            <p>Humidity: {humidity}%   Wind:{wind}km/h;</p>
            <div className="nature">
              <span>NEAR TO NATURE</span><FavoriteIcon className="heart" />
            </div>
          </div>
        </div>
        <div>
          <p className='credits'>&lt;/&gt; with <Icon id="favorite">favorite_border</Icon> by Web Dev-IIITT</p>
        </div>
      </footer>

    </div>
  )}

export default Footer;
