/**
 * This is the main or index page.
 * This contains the WeatherContainer component 
 * This corresponds to / path
 */

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
