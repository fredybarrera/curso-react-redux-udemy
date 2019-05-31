/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import './WeatherData/styles.css';

class WeatherLocation extends Component {

    constructor(props) {
        
        super(props);
        const { city } = props;
        
        this.state = {
            city,
            data: null
        };
        console.log('constructor');
    }
    
    componentDidMount() {
        console.log('componentDidMount');
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');

    }
    
    componentWillMount() {
        console.log('UNSAFE componentWillMount');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('UNSAFE componentWillUpdate');
        
    }
    
    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            console.log('handleUpdateClick');
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });
        });
    }
    
    render(){
        console.log('render');
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50} />}
            </div>
        );
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
}

export default WeatherLocation;