/**
 * Function for formatting the time we get from Open Weather Map API
 * @returns {{month: string, day: string, date: string, hours: string, minutes: string, year: string}}
 */

export const timeFormatter = (time: number, offset: number) => {
    const localDateTimeObject = new Date((time * 1000));

    const dateTimeObject = new Date(localDateTimeObject.getTime() + (localDateTimeObject.getTimezoneOffset() * 60 * 1000) + (offset * 1000));

    const formattedDateTimeObject = {
        month: new Intl.DateTimeFormat('en-US', {month: 'long'}).format(dateTimeObject),
        day: new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(dateTimeObject),
        date: dateTimeObject.getDate(),
        hours: dateTimeObject.getHours() < 10 ? `0${dateTimeObject.getHours()}` : dateTimeObject.getHours(),
        minutes: dateTimeObject.getMinutes() < 10 ? `0${dateTimeObject.getMinutes()}` : dateTimeObject.getMinutes(),
        year: dateTimeObject.getFullYear(),
    };

    return formattedDateTimeObject;
}

/**
 * Function for converting Kelvin to Celcius
 * @returns temperatureInKelvin: number
 */

export const temperatureInCelcius = (temperatureInKelvin: number) => {
    return Math.floor(temperatureInKelvin - 273.15);
};

/**
 * Function for converting Kelvin to Faranheit
 * @returns temperatureInKelvin: number
 */

export const temperatureInFaranheit = (temperatureInKelvin: number) => {
    return Math.floor(((temperatureInKelvin - 273.15)*1.8) + 32);
};