// import { useState } from "react";
// function WeatherPage() {
//     const [zipCode, setZipCode] = useState('');

//     const handleInputChange = (event) => {
//         setZipCode(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // You can use the zipCode value here for further processing
//         console.log('Submitted zip code:', zipCode);
//     };

//     return (
//         <div className="container-fluid mt-4"> 
//         {/* style={{ backgroundColor: '#343d46'}}> */}
//             <div className="row">
//                 <div className="col">
//                     <input type="text" className="form-control" placeholder="Search ZIP Code..." />
//                 </div>
//             </div>
//             <div className="row mt-4">
//                 <div className="col-12 col-md-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">City Name</h5>
//                             <p className="card-text">Temperature: XY°F</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-12 col-md-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">Daily Forecast</h5>
//                             <p className="card-text">put forecast    data here.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-12 col-md-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">Air Conditions</h5>
//                             <p className="card-text">put air conditions here.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default WeatherPage;


// src/Weather.js
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import { fetchWeatherApi } from 'openmeteo';
	
const params = {
	"latitude": 52.52,
	"longitude": 13.41,
	"hourly": ["temperature_2m"],
	"temperature_unit": "fahrenheit",
    "daily": ["temperature_2m", "timezone=auto"],
    // "timezone": "auto",
};
const url = "https://api.open-meteo.com/v1/forecast";

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(url);
                const response = await fetchWeatherApi(url, params);
                console.log("got here")
                setWeatherData(response.data);
                console.log(response)
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Weather Information</h2>
            {weatherData ? (
                <div>
                    {/* <p>Location: {weatherData.city.name}</p> */}
                    {/* <p>Temperature: {weatherData.temperature.value}°F</p> */}
                    <p>Data: {weatherData.body}°F</p>
                </div>
            ) : (
                <p>Unable to load weather data</p>
            )}
        </div>
    );
    // return (setWeatherData);
};

export default Weather;
