import React from 'react'
import { useState } from 'react'

const WeatherCard = ({ weather, temp }) => {

    console.log(weather)

    const [changeTemp, setChangeTemp] = useState(true)

    const handleChangeTemp = () => {
      setChangeTemp(!changeTemp)
    }

  return (
    <article className='weatherBox'>
      <div className='titleBox'>
        <h1>Weather App</h1>
        <h2>{weather?.name}, {weather?.sys.country}</h2>
      </div>
      <div className='propertiesBox'>
        <div className='iconBox'>
        <img className='icon'
          src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
          alt="Image Weather" 
        />
        </div>
        <section className='sectionBox'>
          <h3>"{weather?.weather[0].description}"</h3>
          <ul className='list'>
            <li><span>Wind Speed </span><span>{weather?.wind.speed} m/s</span></li>
            <li><span>Clouds </span><span>{weather?.clouds.all} %</span></li>
            <li><span>Pressure </span><span>{weather?.main.pressure} hPa</span></li>
          </ul>
        </section>
      </div>
      <h2><span>{changeTemp ? `${temp?.celsius} °C` : `${temp?.farenheit} °F`}</span></h2>
      <button className='btnBox' onClick={handleChangeTemp}>{changeTemp ? `Change to °F` : `Change to °C`}</button>
    </article>
  )
}

export default WeatherCard