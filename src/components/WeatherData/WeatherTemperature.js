/* eslint-disable no-unused-vars */
import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weathers';

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [WINDY]: 'windy'
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    return (icon) ? <WeatherIcons name={icon} size="2x" /> : <WeatherIcons name='day-sunny' size="2x" />;
};

const WeatherTemperature = ({ temperature, weatherState }) => {

    return (
        <div>
            {
                getWeatherIcon(weatherState)
            }
            <span>{` ${temperature} C° `}</span>
        </div>
    );
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;