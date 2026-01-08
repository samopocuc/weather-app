import React from 'react';
import './WeatherHeader.css';
const WeatherHeader = (props) => {
    const {icon, location, date} = props;
    return (
        <div className="weather__header">
            <img src={icon} alt="icon" className="weather__header--img"/>
            <div className="weather__header--info">
                <p>{location}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default WeatherHeader;