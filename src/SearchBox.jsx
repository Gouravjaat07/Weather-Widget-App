import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "a85ac116cd6ce4ef413195515ca9cc92";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                feelsLike: jsonResponse.main.feels_like,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        } catch(err) {
            throw err;
        }
    }


    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity(city);
            console.log(city);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err) {
            setError(true);
        }
    }

    return (

        <form onSubmit={handleSubmit} className="SearchBox">
            <TextField id="outlined-basic" label="City Name" variant="outlined" onChange={handleChange}/>
            <br></br><br></br>
            <Button type="submit" variant="contained" color="success" className="Button">Search</Button>
            {error && <h3 style={{color: "red"}}>No such place exists! please search valid City name.</h3>}
        </form>
    );
}
