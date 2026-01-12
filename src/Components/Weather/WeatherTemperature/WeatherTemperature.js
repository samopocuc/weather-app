import React from 'react';
import './WeatherTemperature.css';
const WeatherTemperature = (props) => {
    const {temperature, description} = props;
    return (
        <div className="weather__temperature">
            <p className="weather__temperature--value">{temperature}</p>
            <p className="weather__temperature--description">{description}</p>
        </div>
    )
}

export default WeatherTemperature;