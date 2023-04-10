import React, { useEffect, useState } from 'react'

import WeatherCard from './WeatherCard';

import './style.css';

const Temperature = () => {

  const [searchValue , setSearchValue] = useState('delhi');

  const [weatherInfo , setWeatherInfo] = useState({});

  const getWeatherInfo = async() => {

    try {

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=757f1b33cac72857693e0a375851629b`

      const data = await fetch(url);

      const result = await data.json();

      const {temp , humidity , pressure} = result.main

      const {main} = result.weather[0];

      const {name} = result;

      const {speed} = result.wind;

      const {country , sunset} = result.sys

      const settingWeatherInfo = {

        temp,
        humidity,
        pressure,
        main,
        name,
        speed,
        country,
        sunset,

      };

      setWeatherInfo(settingWeatherInfo);
      
    } catch (error) {

      console.log(error);
      
    }

  }

  useEffect(() => {

    getWeatherInfo();

  } , [])

  return (

    <>
  
    <div className="wrap">

    <div className="search">


    <input type="search" placeholder='City Name'
    autoFocus id='search' className='searchTerm'
    value={searchValue} onChange={(element) => setSearchValue(element.target.value)} />

    <button className="searchButton" type='button' onClick={() => getWeatherInfo()}>Search</button>

    </div>

    </div>

    <WeatherCard weatherInfo ={weatherInfo}/>

    </>

    )
}

export default Temperature