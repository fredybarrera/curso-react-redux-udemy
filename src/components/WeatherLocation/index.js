/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';

import {
    SUN,
    RAIN
} from './../../constants/weathers';

const data = {
    temperature: 12,
    weatherState: RAIN,
    humidity: 10,
    wind: '10 m/s',
};

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Barcelona',
            data: data
        };
    }

    handleUpdateClick = () => {
        console.log('actualizado');
        this.setState({city: 'Santiago de Chile'});
    }
    render(){
        const { city, data } = this.state;
        return(
            <div>
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
};

export default WeatherLocation;