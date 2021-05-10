/**
 * This page is the weather container that performs the API fetching operation for weather from OpenWeatherMaps
 * It allows us to get the weather data for a location and passes date to the WeatherView component
 */

import React, { useState } from 'react';
import WeatherLocationSearch from './WeatherLocationSearch';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import WeatherView from './WeatherView';
import Button from '@material-ui/core/Button';

const StyledGrid = styled(Grid)`
        padding-top: 20px;
    `;

export const WeatherButton = styled(Button)`
    margin-top: 8px;
`;

export const WeatherContainer = () => {
    const [locationInput, setLocationInput] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const handleLocation = (newValue: string) => {
      setLocationInput(newValue);  
    };

    const handleWeatherClick = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=4bf2d273aa7c6b1998f234d78e609def`);
        const data = await response.json();
        if (data) {
            setWeatherData(data);
        }
    };

    return (
        <>
            <StyledGrid container spacing={1}>
                <Grid item xs>
                    <WeatherLocationSearch
                        inputValue={locationInput} 
                        setInputValue={handleLocation}
                    />
                </Grid>
                <Grid item xs>
                    <WeatherButton variant="contained" color="primary" onClick={handleWeatherClick}>
                        Get Weather
                    </WeatherButton>
                </Grid>
            </StyledGrid>
            
            {
                (weatherData !== null && weatherData.cod !== '404') && 
                <WeatherView 
                    data={weatherData}
                />
            }

            {
                (weatherData !== null && weatherData.cod === '404') && 
                 <div> Weather data not found!</div>
            }
        </>
    );
};

export default WeatherContainer;