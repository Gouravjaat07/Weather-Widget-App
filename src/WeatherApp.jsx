import { useState } from 'react';
import SearchBox from './SearchBox';
import WeatherCard from './WeatherCard';
import "./WeatherApp.css";

export default function WeatherApp() {
    let [weather, setWeather] = useState(
        {
        city: "Delhi",    
        temp: 26.05,
        feelsLike: 26.05,
        tempMin: 26.05,
        tempMax: 26.05,
        humidity: 57,
        weather: "Haze",
    });

    let updateInfo = (result) => {
        setWeather(result);
    }

    return (
        <div className='weatherApp'>
            <h2 style={{textAlign: "center", color: "#1E3A8A"}}>Weather-Widget-App</h2>
            <SearchBox updateInfo= {updateInfo}/>
            <WeatherCard Info= {weather}/>   
        </div>
    );
}