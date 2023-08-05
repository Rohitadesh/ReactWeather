import { useState } from 'react';
import './App.css';
// import { json } from 'express';
function App() {
  const [city,setcity]=useState("")
  const [weather,setweather]=useState({})
   const weatherinfo= async (cityname)=>{
    if(cityname===""){
      alert("enter cityname")
    }
    else{
      const apikey="70592b526d9742b8b1bb7e8932ee97cd"
      const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apikey}`)
      const result= await response.json();
      setweather(result)

    }
    }
  return (
    <div className=" main-box bg-[url(../public/img/w.jpg)] h-screen w-screen  flex flex-col flex-wrap justify-center items-center bg-no-repeat bg-cover bg-center bg-fixed ">      
      <div className='h-1/6 w-1/3  flex flex-col flex-wrap justify-center items-center'>
        <h1 className='text-3xl font-serif italic font-semibold'>Weather App</h1>
      </div>
      
      <div className="boxes shadow-2xl weather-box w-1/3 h-3/6 border-2 rounded-lg flex flex-wrap flex-col justify-start items-center gap-16">
       
        <div className='h-[15%] w-full flex flex-wrap flex-row justify-center items-center gap-2'>

        <input  value={city} type="text" className='shadow-xl input rounded-md opacity-50' placeholder='city'
         onChange={(e)=>setcity(e.target.value)}    
         />
        <button onClick={()=>{weatherinfo(city)}} className='shadow-xl button bg-gray-100 opacity-50 hover:bg-blue-700 text-black font-bold rounded-md text-md '>Search</button>
        </div>
        
        <div className=' gap-4 h-[25%] w-full flex flex-wrap flex-col justify-center items-center'>
          {weather?<p className='text-lg'>City : {weather.name}</p>:<p className='text-lg'>City:</p>}
          {weather.main?<p className='text-lg'>Temp : {weather.main.temp} °C</p>:<p className='text-lg'>Temp:0°C</p>}
        </div>
        
        <div className='border-2 bg-gray-100 opacity-50 h-1/6 w-[95%] flex flex-wrap flex-row  justify-start items-center'>
        
          <div className=' h-[100%] w-[34%] flex flex-col flex-wrap justify-center items-center gap-2'>
            {weather.main?<p className='text-md'>{weather?.main?.feels_like} °C</p>:<p className='text-md'>0°C</p>}
            <p className='text-md'>FeelsLike</p>
          </div> 
        
          <div className=' h-[100%] w-[33%] flex flex-col flex-wrap justify-center items-center gap-2'>
            {weather.main?<p className='text-md'>{weather?.main?.humidity} %</p>:<p className='text-md'>0 %</p>}
              <p className='text-md'>Humidity</p>
            
          </div> 
          <div className=' h-[100%] w-[33%] flex flex-col flex-wrap justify-center items-center gap-2'>
            {weather.main?<p>{weather.wind.speed} Km/hr</p>:<p>0 Km/hr</p>}
            <p className='text-md'>Windspeed</p>
            
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
//