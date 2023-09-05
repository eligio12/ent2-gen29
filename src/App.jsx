import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  const [image, setImage] = useState()
  const [inputValue, setInputValue] = useState("")
  
  useEffect(() => {
    const sucess = data => {
      const obj = {
        lat: data.coords.latitude,
        lon: data.coords.longitude
      }
      setCoords(obj)

      // const error = err => {
      //   console.log(err)
        
      // }

    }
    
      navigator.geolocation.getCurrentPosition(sucess)
    // .catch(err => console.log(err))
  },[])

  
  useEffect(() => {
    
    if(coords){
      const key = 'fb78c73f39b90ede92e89b36e2ac8a57'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${key}`
      axios.get(url)
      .then(res => {
        setWeather(res.data)
        const obj = {
          celsius:( res.data.main.temp - 273.15).toFixed(1),
          farenheit: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
        }
        setInputValue(res.data.weather[0].description)
        setTemp(obj)
      })
      .catch(err => console.log(err))

    }
  }, [coords])


  useEffect(() => {
    const Apikey = "39164654-422741556b516a918160b0a00"
    const url = `https://pixabay.com/api/?key=${Apikey}&q=${inputValue}`
    axios.get(url)
    .then(res => setImage(res.data.hits[0]))
    .catch(err => console.log(err))
  },[inputValue, setWeather])
  

  const bgStyle = {
    backgroundImage: `url(${image?.webformatURL})` 
  }


  return (
    <div className='background' style={bgStyle}>
      
      <WeatherCard 
        weather={weather}
        temp={temp}
        />      
      
    </div>
  )
}

export default App
