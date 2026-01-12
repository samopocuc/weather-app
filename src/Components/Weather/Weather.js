import React from 'react';
import './Weather.css';
import WeatherHeader from "./WeatherHeader/WeatherHeader";
import WeatherForecast from "./WeatherTemperature/WeatherTemperature";
import WeatherTemperature from "./WeatherForecast/WeatherForecast";
const Weather = (props) => {
    const sunny = new URL('../../assets/sunny.svg', import.meta.url);
    const visibility = new URL('../../assets/visibility.svg', import.meta.url);
    const feel = new URL('../../assets/feel.svg', import.meta.url);
    const humidity = new URL('../../assets/humidity.svg', import.meta.url);
    const wind = new URL('../../assets/windy.svg', import.meta.url);

    return (
        <div className="weather">
            <WeatherHeader icon={sunny} location="Valle de Angeles, HN" date="Monday 01/17/2022"/>
            <WeatherTemperature temperature={15} description="Mostly sunny"/>
            <WeatherForecast forecast={[
                { icon: visibility, title: "Visibility", value: "10km" },
                { icon: feel, title: "Feels like", value: "18" },
                { icon: humidity, title: "Humidity", value: "45" },
                { icon: wind, title: "Wind", value: "4km/h" }
            ]}></WeatherForecast>
        </div>
    )
}

export default Weather;