import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import WeatherIcon from './WeatherIcon';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { timeFormatter, temperatureInCelcius, temperatureInFaranheit } from '../../utilities/weatherUtilities';

const StyledContainer = styled(Container)`
        padding-top: 20px;
    `;

interface WeatherDetailsProps {
    data: {
        daily: [
            {
                dt: number, 
                temp: {day: number, night: number}, 
                sunrise: number, 
                sunset: number, 
                moonrise: number, 
                moonset: number,
                weather: [{icon: string}],
                humidity: number,
            }
        ],
        hourly: [
            {
                dt: number, 
                temp: number, 
                feels_like: number, 
                weather: [{icon: string}],
            }
        ],
        timezone_offset: number,
    };
};

const WeatherDetails = (props: WeatherDetailsProps) => {
    const { data } = props;

    const [state, setState] = useState(false);

    const handleTemperatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.checked);
    };

    const createWeeklyData = (week: string, day: string, temperatureday: number, temperaturenight: number, sunrise: string, sunset: string, moonrise: string, moonset: string, humidity: number, iconId: string) => {
        return { week, day, temperatureday, temperaturenight, sunrise, sunset, moonrise, moonset, humidity, iconId };
    };

    const createDailyData = (time: string, temperature: number, feels_like: number, iconId: string) => {
        return { time, temperature, feels_like, iconId };
    };

      
    const weeklyRows = data.daily.map((item) => {
        const day = timeFormatter(item.dt, data.timezone_offset);
        const temperatureday = state ? temperatureInCelcius(item.temp.day) : temperatureInFaranheit(item.temp.day);
        const temperaturenight = state ? temperatureInCelcius(item.temp.night) : temperatureInFaranheit(item.temp.night);
        const sunrise = timeFormatter(item.sunrise, data.timezone_offset);
        const sunset = timeFormatter(item.sunset, data.timezone_offset);
        const moonrise = timeFormatter(item.moonrise, data.timezone_offset);
        const moonset = timeFormatter(item.moonset, data.timezone_offset);
        const humidity = item.humidity;
        const iconId = item.weather[0].icon;
        return createWeeklyData(`${day.day}`, `${day.month},${day.date}`, temperatureday, temperaturenight, `${sunrise.hours}:${sunrise.minutes}`, `${sunset.hours}:${sunset.minutes}`, `${moonrise.hours}:${moonrise.minutes}`, `${moonset.hours}:${moonset.minutes}`, humidity, iconId);
    });

    const dailyRows = data.hourly.map((item) => {
        const time = timeFormatter(item.dt, data.timezone_offset);
        const temperature = state ? temperatureInCelcius(item.temp) : temperatureInFaranheit(item.temp);
        const feels_like = state ? temperatureInCelcius(item.feels_like) : temperatureInFaranheit(item.feels_like);
        const iconId = item.weather[0].icon;
        return createDailyData(`${time.hours}:${time.minutes}`, temperature, feels_like, iconId);
    });

    return (
        <StyledContainer maxWidth="md">
            <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <b>&nbsp;°F</b>
                        <Switch 
                            onChange={handleTemperatureChange}
                            color="default"
                        />
                        <b>°C</b>
                        <Typography>
                            Weather Forcast for the week
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                <TableRow>
                                    <TableCell align="right"><b>Week</b></TableCell>
                                    <TableCell align="right"><b>Date</b></TableCell>
                                    <TableCell align="right"><b>Day</b></TableCell>
                                    <TableCell align="right"><b>Night</b></TableCell>
                                    <TableCell align="right"><b>Sunrise</b></TableCell>
                                    <TableCell align="right"><b>Sunset</b></TableCell>
                                    <TableCell align="right"><b>Moonrise</b></TableCell>
                                    <TableCell align="right"><b>Moonset</b></TableCell>
                                    <TableCell align="right"><b>Humidity</b></TableCell>
                                    <TableCell align="right"><b>Forecast</b></TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {weeklyRows.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="right">{row.day}</TableCell>
                                        <TableCell align="right">{row.week}</TableCell>
                                        <TableCell align="right">{row.temperatureday}</TableCell>
                                        <TableCell align="right">{row.temperaturenight}</TableCell>
                                        <TableCell align="right">{row.sunrise}</TableCell>
                                        <TableCell align="right">{row.sunset}</TableCell>
                                        <TableCell align="right">{row.moonrise}</TableCell>
                                        <TableCell align="right">{row.moonset}</TableCell>
                                        <TableCell align="right">{row.humidity}</TableCell>
                                        <TableCell align="right"><WeatherIcon iconId={row.iconId} /></TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs>
                    <Typography>
                            Weather Forcast for the week
                        </Typography>
                        <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                    <TableRow>
                                        <TableCell align="right"><b>Time</b></TableCell>
                                        <TableCell align="right"><b>Temperature</b></TableCell>
                                        <TableCell align="right"><b>Feels Like</b></TableCell>
                                        <TableCell align="right"><b>Forecast</b></TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {dailyRows.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell align="right">{row.time}</TableCell>
                                            <TableCell align="right">{row.temperature}</TableCell>
                                            <TableCell align="right">{row.feels_like}</TableCell>
                                            <TableCell align="right"><WeatherIcon iconId={row.iconId} /></TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                    </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default WeatherDetails;