import { useState } from 'react';
import './App.css';
// import { json } from 'express';
function App() {
  const [city,setcity]=useState("")
  const [weather,setweather]=useState({})
   const weatherinfo= async (cityname)=>{
      const apikey="70592b526d9742b8b1bb7e8932ee97cd"
      const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`)
      const result= await response.json();
      setweather(result)
    }
  return (
    <div className=" main-box bg-[url(../public/img/w.jpg)] h-screen w-screen  flex flex-col flex-wrap justify-center items-center bg-no-repeat bg-cover bg-center bg-fixed ">      
      <div className='h-1/6 w-1/3  flex flex-col flex-wrap justify-center items-center'>
        <h1 className='text-3xl font-serif italic font-semibold'>Weather App</h1>
      </div>
      
      <div className="boxes weather-box w-1/3 h-3/6 border-2 rounded-lg flex flex-wrap flex-col justify-start items-center ">
        {/* <div className='border-2   flex flex-wrap flex-col justify-evenly items-center'> */}
        
        <input  value={city} type="text" className='input rounded-md'
         onChange={(e)=>setcity(e.target.value)}    
         />
        <button onClick={()=>{weatherinfo(city)}} className='button bg-blue-200 hover:bg-blue-700 text-black font-bold rounded-md'>search</button>
        {/* </div> */}
        <p>{weather?.name}</p>
        <p>{weather?.main?.temp}°C</p>
        <div className='border-2 h-1/6 w-4/5 flex flex-wrap flex-col justify-evenly items-center'>
          <p>{weather?.main?.feels_like}°C</p>
          <p>Feelslike</p>
          <p>{weather?.main?.humidity}%</p>
          <p>humidity</p>
          <p>{weather?.wind?.speed}Km/hr</p>
          <p>Windspeed</p>
        </div>
      </div>
    </div>
  );
}

export default App;
//