import React, { useEffect, useState } from 'react'

const WeatherCard = ({weatherInfo}) => {

  const [weatherState , setweatherState] = useState('');

  const {
    temp,
    humidity,
    pressure,
    main,
    name,
    speed,
    country,
    sunset,
  } = weatherInfo;

  useEffect(() => {

    if(main){

      switch (main){

        case "Clouds" : setweatherState('wi-day-cloudy');

        break

        case "Haze" : setweatherState('wi-fog');

        break

        case "Mist" : setweatherState('wi-dust');

        break

        case "Clear" : setweatherState('wi-day-sunny');

        break

        default: setweatherState('wi-day-sunny');

        break

      }


    }


 } , [main])

  let time = sunset;

  let date = new Date(time * 1000);

  let perfectTime = `${date.getHours()} : ${date.getMinutes()}`;

  return (

    <>
    
    <article className="widget">

    <div className="weatherIcon">

    <i className={`${weatherState}`}></i>

    </div>

    <div className="weatherInfo">

    <div className="temperature">

    <span>{temp}&deg;</span>

    </div>

    <div className="description">

    <div className="weatherCondition">{main}</div>

    <div className="place">

    {name} , {country}

    </div>

    </div>

    </div>

    <div className="date">{new Date().toLocaleString()}</div>

    <div className="extra-temp">

    <div className="temp-info-minmax">

    <div className="two-sided-section">

    <p>

    <i className={'wi wi-sunset'}></i>

    </p>

    <p className="extra-info-leftside">
      {perfectTime}PM <br/>
      Sunset
    </p>

    </div>

    <div className="two-sided-section">

    <p>

    <i className={'wi wi-humidity'}></i>

    </p>

    <p className="extra-info-leftside">
      {humidity}<br/>
      Humidity
    </p>

    </div>

    </div>

    <div className="weather-extra-info">

    <div className="two-sided-section">

    <p>

    <i className={'wi wi-rain'}></i>

    </p>

    <p className="extra-info-leftside">
      {pressure} <br/>
      Pressure
    </p>

    </div>

    <div className="two-sided-section">

    <p>

    <i className={'wi wi-strong-wind'}></i>

    </p>

    <p className="extra-info-leftside">
      {speed} <br/>
      Speed
    </p>

    </div>


    </div>

    </div>

    </article>


    
    </>

  )
}

export default WeatherCard