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

export const temperatureInCelcius = (temperatureInKelvin: number) => {
    return Math.floor(temperatureInKelvin - 273.15);
};

export const temperatureInFaranheit = (temperatureInKelvin: number) => {
    return Math.floor(((temperatureInKelvin - 273.15)*1.8) + 32);
};