import Container from '@material-ui/core/Container';
import WeatherContainer from '../components/WeatherComponents/WeatherContainer';

export const Home = () => {
  return (
  <div>
    <Container maxWidth="md">
      <WeatherContainer />
    </Container>
  </div>
  )
};

export default Home;
