/**
 * This component retrives the weather icon images using the iconId params from Open Weather Maps
 */

import React from 'react';
import Image from 'next/image';

interface WeatherIconProps {
    iconId: string;
};

const WeatherIcon = (props: WeatherIconProps) => {

    const { iconId } = props;

    return <Image src={`https://openweathermap.org/img/w/${iconId}.png`} width={50} height={50}/>
};

export default WeatherIcon;