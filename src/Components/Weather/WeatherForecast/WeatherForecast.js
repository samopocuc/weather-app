import React from 'react';
import './WeatherForecast.css';
const WeatherForecast = ({ forecast = [] }) => {
    return (
        <div className="weather__forecast">
            {forecast.map((item, i) => (
                <div key={i} className="weather__forecast--item">
                    {item.icon && <span className="weather__forecast--icon">
                        <img src={item.icon} alt="icon" className="weather__forecast--img"/>
                    </span>}
                    <span>{item.title}</span>&nbsp;
                    <span>{item.value}</span>
                </div>
            ))}
        </div>
    )
}

export default WeatherForecast;