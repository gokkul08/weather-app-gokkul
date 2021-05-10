/**
 * This component provides the weather view after we complete the search for a location
 * It accepts the weather data as props, manipulates the data to make it available for viewing on the screen
 */

import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import WeatherIcon from './WeatherIcon';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { timeFormatter, temperatureInCelcius, temperatureInFaranheit } from '../../utilities/weatherUtilities';

interface WeatherViewProps {
    data: {
        coord: {
            lat: number,
            lon: number,
        }
        dt: number,
        main: {
            temp: number, 
            temp_max: number,
            temp_min: number,
            feels_like: number,
            pressure: number,
            humidity: number,
        },
        name: string,
        weather: [
            {
                main: string,
                icon: string,
            }
        ],
        sys: {
            sunrise: number,
            sunset: number,
            country: string,
        }
        timezone: number,
        wind: {
            deg: number,
            speed: number,
        }
    };
};

export const WeatherView = (props: WeatherViewProps) => {
    const { data } = props;

    const [state, setState] = useState(false);

    const latitute = data.coord && data.coord.lat;
    const longitude = data.coord && data.coord.lon;
    const currentTime = timeFormatter(data.dt, data.timezone);
    const sunRiseTime = timeFormatter(data.sys.sunrise, data.timezone);
    const sunSetTime = timeFormatter(data.sys.sunset, data.timezone);
    const currentTemperature = state ? temperatureInCelcius(data.main.temp) : temperatureInFaranheit(data.main.temp);
    const maxTemperature = state ? temperatureInCelcius(data.main.temp_max) : temperatureInFaranheit(data.main.temp_max);
    const minTemperature = state ? temperatureInCelcius(data.main.temp_min) : temperatureInFaranheit(data.main.temp_min);
    const feelsLikeTemperature = state ? temperatureInCelcius(data.main.feels_like) : temperatureInFaranheit(data.main.feels_like);
    const locationName = `${data.name}, ${data.sys.country}`;
    const weatherDescription = data.weather[0].main;
    const windDegree = data.wind.deg;
    const windSpeed = data.wind.speed;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const iconId = data.weather[0].icon;

    const handleTemperatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.checked);
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Card>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                    <b>&nbsp;°F</b>
                                <Switch 
                                    onChange={handleTemperatureChange}
                                    color="default"
                                />
                                    <b>°C</b>
                            </Grid>
                            <Grid item xs={4}>
                                <CardContent>
                                    <Typography variant="h3">
                                        {currentTemperature}°
                                    </Typography>
                                    <Typography>
                                        Feels like <b>{feelsLikeTemperature}°</b>
                                    </Typography>
                                    <WeatherIcon iconId={iconId} />
                                </CardContent>
                            </Grid>
                            <Grid item xs={4}>
                                <CardContent>
                                    <Typography variant="h4">
                                        {currentTime.hours} : {currentTime.minutes}
                                    </Typography>
                                    <Typography variant="h5">
                                        {currentTime.month} {currentTime.date}
                                    </Typography>
                                    <Typography variant="h6">
                                        {currentTime.year}
                                    </Typography>
                                    <Typography variant="h5">
                                        {currentTime.day}
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={4}>
                                <CardContent>
                                    <Typography variant="h5">
                                        {locationName}
                                    </Typography>
                                    <Typography>
                                        High {maxTemperature}° | Low {minTemperature}°
                                    </Typography>
                                    <Typography>
                                        Humidity: {humidity}% 
                                    </Typography>
                                    <Typography>
                                        Pressure: {pressure} hPa 
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={4}>
                                <CardContent>
                                    <Typography variant="h6">
                                        Sun
                                    </Typography>
                                    <Typography>
                                        Sunrise: {sunRiseTime.hours} {sunRiseTime.minutes}
                                    </Typography>
                                    <Typography>
                                        Sunset: {sunSetTime.hours} {sunSetTime.minutes}
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={4}>
                                <CardContent>
                                    <Typography variant="h6">
                                        Wind Data
                                    </Typography>
                                    <Typography>
                                        Speed: {windSpeed} m/s
                                    </Typography>
                                    <Typography>
                                        Degree: {windDegree}° 
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={4}>
                                <CardContent>
                                    <Typography variant="h6">
                                        Coordinates
                                    </Typography>
                                    <Typography>
                                        Latitude: {latitute}°
                                    </Typography>
                                    <Typography>
                                        Longitude: {longitude}°
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs>
                            <CardActions>
                                <Link href={`/weather/${latitute}_${longitude}`}>
                                    <Button size="small" color="primary">Get Detailed Weather Forecast</Button>
                                </Link>
                            </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default WeatherView;