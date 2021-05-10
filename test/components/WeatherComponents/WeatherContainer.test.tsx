import React from 'react'
import { render } from '../../test-utils'
import { WeatherContainer } from '../../../components/WeatherComponents/WeatherContainer';

describe('About page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<WeatherContainer />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})