import React from 'react';
import './Weather.css';
import WeatherHeader from "./WeatherHeader/WeatherHeader";
const Weather = (props) => {
    const sunny = new URL('../../assets/sunny.svg', import.meta.url);

    return (
        <div className="weather">
            <WeatherHeader icon={sunny} location="Valle de Angeles, HN" date="Monday 01/17/2022"/>
        </div>
    )
}

export default Weather;