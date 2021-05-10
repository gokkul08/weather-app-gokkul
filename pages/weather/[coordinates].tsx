import { GetServerSideProps } from 'next';
import fetch from 'node-fetch';
import WeatherDetails from '../../components/WeatherComponents/WeatherDetails';

interface Data {
    data: Object;
};

export const WeatherDetailsPage = (props: Data) => {
    const { data } = props;

    return (
        <div>
            <WeatherDetails data={data}/>
        </div>
    )
};

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const { coordinates } = params;
    const latitude = coordinates.split('_')[0];
    const longitude = coordinates.split('_')[1];

    const result = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=4bf2d273aa7c6b1998f234d78e609def`);
    const data = await result.json();

    return {
        props: {data},
    }
};

export default WeatherDetailsPage;