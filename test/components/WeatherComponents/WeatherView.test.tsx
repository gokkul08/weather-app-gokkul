import React from 'react'
import { render } from '../../test-utils'
import { WeatherView } from '../../../components/WeatherComponents/WeatherView';

jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />)

const mockData = {
    'coord': {
        'lat': 17.3616,
        'lon': 78.4747,
    },
    'dt': 1620652723,
    'main': {
        'feels_like': 308.4,
        'humidity': 49,
        'pressure': 1008,
        'temp': 300,
        'temp_max': 300,
        'temp_min': 300,
    },
    'timezone': 19800,
    'sys': {
        'country': 'IN',
        'sunrise': 1620605764,
        'sunset': 1620605764,
    },
    'weather':
        [{
            'main': 'Clouds',
            'icon': '03n',
        }],
    'wind': {
        'deg': 200,
        'speed': 1.54
    }
}

describe('About page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<WeatherView data={mockData}/>, {})
    expect(asFragment()).toMatchSnapshot()
  })
})