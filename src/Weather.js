import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(prop) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState("Johannesburg");

    useEffect(() => {
        const apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
    }, [city]);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: "Wednesday 17:39",
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            city: response.data.name,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        // The city is already updated on input change, so no need to handle it here.
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Enter a city..."
                                className="form-control"
                                autoFocus
                                onChange={(event) => setCity(event.target.value)}
                            />
                        </div>
                        <div className="col-3">
                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-primary w-100"
                            />
                        </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                            <img
                                src={weatherData.iconUrl}
                                alt={weatherData.description}
                                className="float-left"
                            />
                            <div className="float-left">
                                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                                <span className="unit">°C</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        return "Loading...";
    }
}
